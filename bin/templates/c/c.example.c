#include <linux/btree.h>
#include <linux/cache.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define NODESIZE MAX(L1_CACHE_BYTES, 128)

struct btree_geo {
	int keylen;
	int no_pairs;
	int no_longs;
};

struct btree_geo btree_geo32 = {
	.keylen = 1,
	.no_pairs = NODESIZE / sizeof(long) / 2,
	.no_longs = NODESIZE / sizeof(long) / 2,
};
EXPORT_SYMBOL_GPL(btree_geo32);

#define LONG_PER_U64 (64 / BITS_PER_LONG)
struct btree_geo btree_geo64 = {
	.keylen = LONG_PER_U64,
	.no_pairs = NODESIZE / sizeof(long) / (1 + LONG_PER_U64),
	.no_longs = LONG_PER_U64 * (NODESIZE / sizeof(long) / (1 + LONG_PER_U64)),
};
EXPORT_SYMBOL_GPL(btree_geo64);

struct btree_geo btree_geo128 = {
	.keylen = 2 * LONG_PER_U64,
	.no_pairs = NODESIZE / sizeof(long) / (1 + 2 * LONG_PER_U64),
	.no_longs = 2 * LONG_PER_U64 * (NODESIZE / sizeof(long) / (1 + 2 * LONG_PER_U64)),
};
EXPORT_SYMBOL_GPL(btree_geo128);

#define MAX_KEYLEN	(2 * LONG_PER_U64)

static struct kmem_cache *btree_cachep;

void *btree_alloc(gfp_t gfp_mask, void *pool_data)
{
	return kmem_cache_alloc(btree_cachep, gfp_mask);
}

/*
 * Usually this function is quite similar to normal lookup.  But the key of
 * a parent node may be smaller than the smallest key of all its siblings.
 * In such a case we cannot just return NULL, as we have only proven that no
 * key smaller than __key, but larger than this parent key exists.
 * So we set __key to the parent key and retry.  We have to use the smallest
 * such parent key, which is the last parent key we encountered.
 */
void *btree_get_prev(struct btree_head *head, struct btree_geo *geo,
		     unsigned long *__key)
{
	int i, height;
	unsigned long *node, *oldnode;
	unsigned long *retry_key = NULL, key[MAX_KEYLEN];

	if (keyzero(geo, __key))
		return NULL;

	if (head->height == 0)
		return NULL;
	longcpy(key, __key, geo->keylen);
retry:
	dec_key(geo, key);

	node = head->node;
	for (height = head->height ; height > 1; height--) {
		for (i = 0; i < geo->no_pairs; i++)
			if (keycmp(geo, node, i, key) <= 0)
				break;
		if (i == geo->no_pairs)
			goto miss;
		oldnode = node;
		node = bval(geo, node, i);
		if (!node)
			goto miss;
		retry_key = bkey(geo, oldnode, i);
	}

	if (!node)
		goto miss;

	for (i = 0; i < geo->no_pairs; i++) {
		if (keycmp(geo, node, i, key) <= 0) {
			if (bval(geo, node, i)) {
				longcpy(__key, bkey(geo, node, i), geo->keylen);
				return bval(geo, node, i);
			} else
				goto miss;
		}
	}
miss:
	if (retry_key) {
		longcpy(key, retry_key, geo->keylen);
		retry_key = NULL;
		goto retry;
	}
	return NULL;
}

static void *btree_remove_level(struct btree_head *head, struct btree_geo *geo,
		unsigned long *key, int level)
{
	unsigned long *node;
	int i, pos, fill;
	void *ret;

	if (level > head->height) {
		/* we recursed all the way up */
		head->height = 0;
		head->node = NULL;
		return NULL;
	}

	node = find_level(head, geo, key, level);
	pos = getpos(geo, node, key);
	fill = getfill(geo, node, pos);
	if ((level == 1) && (keycmp(geo, node, pos, key) != 0))
		return NULL;
	ret = bval(geo, node, pos);

	/* remove and shift */
	for (i = pos; i < fill - 1; i++) {
		setkey(geo, node, i, bkey(geo, node, i + 1));
		setval(geo, node, i, bval(geo, node, i + 1));
	}
	clearpair(geo, node, fill - 1);

	if (fill - 1 < geo->no_pairs / 2) {
		if (level < head->height)
			rebalance(head, geo, key, level, node, fill - 1);
		else if (fill - 1 == 1)
			btree_shrink(head, geo);
	}

	return ret;
}

void *btree_remove(struct btree_head *head, struct btree_geo *geo,
		unsigned long *key)
{
	if (head->height == 0)
		return NULL;

	return btree_remove_level(head, geo, key, 1);
}
EXPORT_SYMBOL_GPL(btree_remove);

int btree_merge(struct btree_head *target, struct btree_head *victim,
		struct btree_geo *geo, gfp_t gfp)
{
	unsigned long key[MAX_KEYLEN];
	unsigned long dup[MAX_KEYLEN];
	void *val;
	int err;

	BUG_ON(target == victim);

	if (!(target->node)) {
		/* target is empty, just copy fields over */
		target->node = victim->node;
		target->height = victim->height;
		__btree_init(victim);
		return 0;
	}

	/* TODO: This needs some optimizations.  Currently we do three tree
	 * walks to remove a single object from the victim.
	 */
	for (;;) {
		if (!btree_last(victim, geo, key))
			break;
		val = btree_lookup(victim, geo, key);
		err = btree_insert(target, geo, key, val, gfp);
		if (err)
			return err;
		/* We must make a copy of the key, as the original will get
		 * mangled inside btree_remove. */
		longcpy(dup, key, geo->keylen);
		btree_remove(victim, geo, dup);
	}
	return 0;
}
EXPORT_SYMBOL_GPL(btree_merge);

static size_t __btree_for_each(struct btree_head *head, struct btree_geo *geo,
			       unsigned long *node, unsigned long opaque,
			       void (*func)(void *elem, unsigned long opaque,
					    unsigned long *key, size_t index,
					    void *func2),
			       void *func2, int reap, int height, size_t count)
{
	int i;
	unsigned long *child;

	for (i = 0; i < geo->no_pairs; i++) {
		child = bval(geo, node, i);
		if (!child)
			break;
		if (height > 1)
			count = __btree_for_each(head, geo, child, opaque,
					func, func2, reap, height - 1, count);
		else
			func(child, opaque, bkey(geo, node, i), count++,
					func2);
	}
	if (reap)
		mempool_free(node, head->mempool);
	return count;
}

static void empty(void *elem, unsigned long opaque, unsigned long *key,
		  size_t index, void *func2)
{
}

void visitorl(void *elem, unsigned long opaque, unsigned long *key,
	      size_t index, void *__func)
{
	visitorl_t func = __func;

	func(elem, opaque, *key, index);
}
EXPORT_SYMBOL_GPL(visitorl);

void visitor32(void *elem, unsigned long opaque, unsigned long *__key,
	       size_t index, void *__func)
{
	visitor32_t func = __func;
	u32 *key = (void *)__key;

	func(elem, opaque, *key, index);
}
EXPORT_SYMBOL_GPL(visitor32);

void visitor64(void *elem, unsigned long opaque, unsigned long *__key,
	       size_t index, void *__func)
{
	visitor64_t func = __func;
	u64 *key = (void *)__key;

	func(elem, opaque, *key, index);
}
EXPORT_SYMBOL_GPL(visitor64);

static int __init btree_module_init(void)
{
	btree_cachep = kmem_cache_create("btree_node", NODESIZE, 0,
			SLAB_HWCACHE_ALIGN, NULL);
	return 0;
}

static void __exit btree_module_exit(void)
{
	kmem_cache_destroy(btree_cachep);
}

/* If core code starts using btree, initialization should happen even earlier */
module_init(btree_module_init);
module_exit(btree_module_exit);
