data Tree a = Nil Int | Leaf Int [a] | Node Int [a] [Tree a] deriving Show

find :: (Ord a, Eq a) => Tree a -> a -> Bool
find (Nil _) _ = False
find (Leaf _ []) _ = False
find (Leaf m (k:ks)) x
  | x == k = True
  | x < k  = False
  | x > k  = find (Leaf m ks) x
find (Node _ [] (t:ts)) x = find t x
find (Node m (k:ks) (t:ts)) x
  | x == k = True
  | x < k  = find t x
  | x > k  = find (Node m ks ts) x

insert :: (Ord a, Eq a) => Tree a -> a -> Tree a
insert t x = if is_full t then insert_non_full (split t) x
                          else insert_non_full t x

insert_non_full :: (Ord a, Eq a) => Tree a -> a -> Tree a
insert_non_full (Nil m) x = Leaf m [x]
insert_non_full (Leaf m []) x = Leaf m [x]
insert_non_full l@(Leaf m keys@(k:ks)) x
  | x == k = l
  | x < k  = Leaf m (x:keys)
  | x > k  = Leaf m (k:new_ks)
    where Leaf _ new_ks = insert_non_full (Leaf m ks) x
insert_non_full (Node m [] (t:ts)) x = if is_full t then insert_non_full (split t) x
                                                    else Node m [] [(insert_non_full t x)]
insert_non_full n@(Node m keys@(k:ks) trees@(t:ts)) x
  | x == k = n
  | x < k  = if is_full t then insert_non_full (Node m (newK:k:ks) (newT1:newT2:ts)) x
                          else Node m keys ((insert_non_full t x):ts)
  | x > k  = Node m (k:new_ks) (t:new_ts)
    where Node _ new_ks new_ts = insert_non_full (Node m ks ts) x
          Node _ [newK] [newT1, newT2] = split t

split :: (Ord a, Eq a) => Tree a -> Tree a
split (Leaf m keys) = Node m [k] [Leaf m k1, Leaf m k2]
  where k1 = first_half keys
        k:k2 = last_half keys
split (Node m keys trees) = Node m [k] [Node m k1 t1, Node m k2 t2]
  where k1 = first_half keys
        k:k2 = last_half keys
        t1 = first_half trees
        t2 = last_half trees

first_half :: [a] -> [a]
first_half xs = take (div (length xs) 2) xs

last_half :: [a] -> [a]
last_half xs = drop (div (length xs) 2) xs

is_full :: (Ord a, Eq a) => Tree a -> Bool
is_full (Nil m) = False
is_full (Leaf m ks)
  | length ks == (2 * m - 1) = True
  | otherwise = False
is_full (Node m ks _)
  | length ks == (2 * m - 1) = True
  | otherwise = False


delete :: (Ord a, Eq a) => Tree a -> a -> Tree a
delete (Nil _) _ = error "Underflow"
delete (Leaf _ []) _ = error "Underflow"
delete n@(Node m [k] [t1, t2]) x = if is_few t1 && is_few t2
                                     then delete_non_few (merge k t1 t2) x
                                     else delete_non_few n x
delete n x = delete_non_few n x

is_few :: (Ord a, Eq a) => Tree a -> Bool
is_few (Nil _) = False
is_few (Leaf m keys)
  | length keys == (m - 1) = True
  | otherwise = False
is_few (Node m keys _)
  | length keys == (m - 1) = True
  | otherwise = False

delete_non_few :: (Ord a, Eq a) => Tree a -> a -> Tree a
delete_non_few l@(Leaf _ _) x = delete_leaf l x
delete_non_few n@(Node m [k] [t1, t2]) x
  | x == k = delete_here n x
  | x < k  = delete_middle n x
  | x > k  = delete_last n x
delete_non_few n@(Node m (k:ks) (t:t_next:ts)) x
  | x == k = delete_here n x
  | x < k  = delete_middle n x
  | x > k  = Node m (k:new_ks) (t:new_ts)
    where Node _ new_ks new_ts = delete_non_few (Node m ks (t_next:ts)) x

delete_leaf :: (Ord a, Eq a) => Tree a -> a -> Tree a
delete_leaf l@(Leaf m (k:ks)) x
  | x == k = Leaf m ks
  | x < k  = l
  | x > k  = Leaf m (k:new_ks) where Leaf _ new_ks = delete_leaf (Leaf m ks) x

merge :: (Ord a, Eq a) => a -> Tree a -> Tree a -> Tree a
merge k (Leaf m1 keys1) (Leaf _ keys2) = Leaf m1 (keys1 ++ [k] ++ keys2)
merge k (Node m1 keys1 trees1) (Node _ keys2 trees2) = Node m1 (keys1 ++ [k] ++ keys2)


shift_left :: (Ord a, Eq a) => a -> Tree a -> Tree a -> Tree a
shift_left k (Leaf m keys1) (Leaf _ (k2:keys2)) = Node m [k2] [(Leaf m (keys1 ++ [k]))]

shift_right :: (Ord a, Eq a) => a -> Tree a -> Tree a -> Tree a
shift_right k (Leaf m keys1) (Leaf _ keys2) = Node m [last keys1] [(Leaf m (init keys1)) ]

get_min :: (Ord a, Eq a) => Tree a -> a
get_min (Leaf _ keys) = head keys
get_min (Node _ _ trees) = get_min (head trees)

delete_min :: (Ord a, Eq a) => Tree a -> Tree a
delete_min (Leaf m keys) = Leaf m (tail keys)
delete_min (Node m keys (t:ts)) = Node m keys ((delete_min t):ts)

get_max :: (Ord a, Eq a) => Tree a -> a
get_max (Leaf _ keys) = last keys
get_max (Node _ _ trees) = get_max (last trees)

delete_max :: (Ord a, Eq a) => Tree a -> Tree a
delete_max (Leaf m keys) = Leaf m (init keys)
delete_max (Node m keys trees) = Node m keys ((init trees) ++ [delete_max (last trees)])
