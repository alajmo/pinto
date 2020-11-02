(ns phlegmaticprogrammer.btree)

(defrecord M-Node [leaf content]) ; node in memory

(defn- violation [s]
  (throw (RuntimeException. s)))

(defn- vec-concat [& items] (vec (apply concat items)))

(defn- vec-replace [v i j coll] (vec-concat (subvec v 0 i) coll (subvec v j)))

(defprotocol BTreePool
  (btree-empty [this])
  (btree-insert [this btree x])
  (btree-delete [this btree key])

(defn btree-pool
  "Creates a BTreePool instance.
   param-t        minimum degree of B-tree, >= 2
   param-cmp      comparator (returning < 0, = 0 or > 0), must be able to compare:
                    content with content
                    key with key
                    content with key and vice versa
   store-node     convert M-Node into an address
   load-node      convert address into an M-Node"
[

 (store-m-node [leaf content]
   (store-node (M-Node. leaf content)))

 (btree-empty- [] (store-m-node true []))

 (btree-split-child [parent-content child child-index]
   (let [t param-t
         {child-leaf :leaf child-content :content} child
         key-index (if child-leaf (- t 1) (- (* 2 t) 1))
         key (child-content key-index)
         left-child-content (subvec child-content 0 key-index)
         left-child (M-Node. child-leaf left-child-content)
         right-child-content (subvec child-content (+ key-index 1))
         right-child (M-Node. child-leaf right-child-content)
         ]
     {:content (vec-concat
                (subvec parent-content 0 child-index)
                [(store-node left-child) key (store-node right-child)]
                (subvec parent-content (+ child-index 1)))
      :left-child left-child
      :right-child right-child}))

 (btree-is-full [{btree-leaf :leaf btree-content :content}]
   (if btree-leaf
     (= (count btree-content) (- (* 2 param-t) 1))
     (= (count btree-content) (- (* 4 param-t) 1))))

 (btree-insert-nonfull [m-node key]
   (let [content (:content m-node)
         count (count content)]
     (if (:leaf m-node)
       (loop [i 0]
         (if (< i count)
           (let [c (param-cmp key (content i))]
             (cond
               (= c 0) (store-m-node true (assoc content i key))
               (< c 0) (store-m-node true (vec-replace content i i [key]))
               (> c 0) (recur (+ i 1))))
           (store-m-node true (vec-concat content [key]))))
       (loop [i 1]
         (if (< i count)
           (let [c (param-cmp key (content i))]
             (cond
               (= c 0) (store-m-node false (assoc content i key))
               (< c 0) (store-m-node false (btree-insert-into-child content (- i 1) key))
               (> c 0) (recur (+ i 2))))
           (store-m-node false (btree-insert-into-child content (- count 1) key)))))))

 (btree-insert-into-child [content pos key]
   (let [child (load-node (content pos))]
     (if-not (btree-is-full child)
       (vec-replace content pos (+ pos 1) [(btree-insert-nonfull child key)])
       (let [{new-content :content left-child :left-child right-child :right-child}
             (btree-split-child content child pos)
             i (+ pos 1)
             c (param-cmp key (new-content i))]
         (if-not (= c 0)
           (assoc new-content i key))))))

 (btree-insert- [s-node key]
   (let [m-node (load-node s-node)]
     (if-not (btree-is-full m-node)
       (btree-insert-nonfull m-node key)
       (let [{[left middle right] :content
              left-child :left-child
              right-child :right-child }
             (btree-split-child [s-node] m-node 0)
             c (param-cmp key middle)]
         (store-m-node false
                       (cond
                         (= c 0) [left key right]

 (btree-is-thin [{leaf :leaf content :content}]
   (if leaf
     (= (count content) (- param-t 1))
     (= (count content) (- (* 2 param-t) 1))))

 (find-key-in-content [start step key content]
   (let [len (count content)]
     (loop [i start]
       (if (>= i len)
         {:not-found i}
         (let [c (param-cmp key (content i))]
           (cond
             (= c 0) {:found i}
             (< c 0) {:not-found i}
             (> c 0) (recur (+ i step))))))))

 (find-max-key [{leaf :leaf content :content}]
   (let [c (content (- (count content) 1))]
     (if leaf c (find-max-key (load-node c)))))

 (find-min-key [{leaf :leaf content :content}]
   (let [c (content 0)]
     (if leaf c (find-min-key (load-node c)))))

 (delete-max-key [m-node]
   (let [k (find-max-key m-node)]
     [(btree-delete-not-thin m-node k) k]))

 (delete-min-key [m-node]
   (let [k (find-min-key m-node)]
     [k (btree-delete-not-thin m-node k)]))

 (btree-rotate-right-delete [content child-index child left-child key]
   (if (:leaf child)
     (let [k (content (- child-index 1))
           lc (:content left-child)
           lcc (count lc)
           new-left-child (store-m-node true (subvec lc 0 (- lcc 1)))
           new-child {:leaf true :content (vec-concat [k] (:content child))}
           result-child (btree-delete-not-thin new-child key)
           ]
       (store-m-node false (vec-replace content (- child-index 2) (+ child-index 1)
                                        [new-left-child (lc (- lcc 1)) result-child])))
     (let [k (content (- child-index 1))
           lc (:content left-child)
           lcc (count lc)
           new-left-child (store-m-node false (subvec lc 0 (- lcc 2)))
           new-child {:leaf false :content (vec-concat [(lc (- lcc 1)) k] (:content child))}
           result-child (btree-delete-not-thin new-child key)
           ]
       (store-m-node false (vec-replace content (- child-index 2) (+ child-index 1)
                                        [new-left-child (lc (- lcc 2)) result-child])))))

 (btree-rotate-left-delete [content child-index child right-child key]
   (if (:leaf child)
     (let [k (content (+ child-index 1))
           rc (:content right-child)
           rcc (count rc)
           new-right-child (store-m-node true (subvec rc 1))
           new-child {:leaf true :content (vec-concat (:content child) [k])}
           result-child (btree-delete-not-thin new-child key)
           ]
       (store-m-node false (vec-replace content child-index (+ child-index 3)
                                        [result-child (rc 0) new-right-child])))
     (let [k (content (+ child-index 1))
           rc (:content right-child)
           rcc (count rc)
           new-right-child (store-m-node false (subvec rc 2))
           new-child {:leaf false :content (vec-concat (:content child) [k (rc 0)])}
           result-child (btree-delete-not-thin new-child key)
           ]
       (store-m-node false (vec-replace content child-index (+ child-index 3)
                                        [result-child (rc 1) new-right-child])))))
