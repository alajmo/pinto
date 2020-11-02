module.exports = [
    {
        "group": "LineNr",
        "row": 1,
        "char": "1"
    },
    {
        "group": "goDirective",
        "linkedGroup": "Statement",
        "row": 1,
        "char": "package"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 1,
        "char": " btree\n"
    },
    {
        "group": "LineNr",
        "row": 2,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 2,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 3,
        "char": "3"
    },
    {
        "group": "goDirective",
        "linkedGroup": "Statement",
        "row": 3,
        "char": "import"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 3,
        "char": " (\n"
    },
    {
        "group": "LineNr",
        "row": 4,
        "char": "4"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": "\t"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 4,
        "char": "&quot;fmt&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 5,
        "char": "5"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 5,
        "char": "\t"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 5,
        "char": "&quot;io&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 6,
        "char": "6"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 6,
        "char": "\t"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 6,
        "char": "&quot;sort&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 7,
        "char": "7"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 7,
        "char": "\t"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 7,
        "char": "&quot;strings&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 8,
        "char": "8"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 8,
        "char": "\t"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 8,
        "char": "&quot;sync&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 9,
        "char": "9"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 9,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 10,
        "char": "10"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 10,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 11,
        "char": "11"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 11,
        "char": "// Item represents a single object in the tree.\n"
    },
    {
        "group": "LineNr",
        "row": 12,
        "char": "12"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 12,
        "char": "type"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 12,
        "char": " Item "
    },
    {
        "group": "goDeclType",
        "linkedGroup": "Statement",
        "row": 12,
        "char": "interface"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 12,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 13,
        "char": "13"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 13,
        "char": "// Less tests whether the current item is less than the given argument.\n"
    },
    {
        "group": "LineNr",
        "row": 14,
        "char": "14"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 14,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 14,
        "char": "//\n"
    },
    {
        "group": "LineNr",
        "row": 15,
        "char": "15"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 15,
        "char": "// This must provide a strict weak ordering.\n"
    },
    {
        "group": "LineNr",
        "row": 16,
        "char": "16"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 16,
        "char": "// If !a.Less(b) &amp;&amp; !b.Less(a), we treat this to mean a &#61;&#61; b (i.e. we can only\n"
    },
    {
        "group": "LineNr",
        "row": 17,
        "char": "17"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 17,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 17,
        "char": "// hold one of either a or b in the tree).\n"
    },
    {
        "group": "LineNr",
        "row": 18,
        "char": "18"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 18,
        "char": "\tLess(than Item) "
    },
    {
        "group": "goType",
        "linkedGroup": "Type",
        "row": 18,
        "char": "bool\n"
    },
    {
        "group": "LineNr",
        "row": 19,
        "char": "19"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 19,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 20,
        "char": "20"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 20,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 21,
        "char": "21"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 21,
        "char": "const"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 21,
        "char": " (\n"
    },
    {
        "group": "LineNr",
        "row": 22,
        "char": "22"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 22,
        "char": "\tDefaultFreeListSize &#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 22,
        "char": "32\n"
    },
    {
        "group": "LineNr",
        "row": 23,
        "char": "23"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 23,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 24,
        "char": "24"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 25,
        "char": "25"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 25,
        "char": "var"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": " (\n"
    },
    {
        "group": "LineNr",
        "row": 26,
        "char": "26"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 26,
        "char": "\tnilItems    &#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 26,
        "char": "make"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 26,
        "char": "(items, "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 26,
        "char": "16"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 26,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 27,
        "char": "27"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 27,
        "char": "\tnilChildren &#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 27,
        "char": "make"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 27,
        "char": "(children, "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 27,
        "char": "16"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 27,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 28,
        "char": "28"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 28,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 29,
        "char": "29"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 29,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 30,
        "char": "30"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 30,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": " (f *FreeList) newNode() (n *node) {\n"
    },
    {
        "group": "LineNr",
        "row": 31,
        "char": "31"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": "\tf.mu.Lock()\n"
    },
    {
        "group": "LineNr",
        "row": 32,
        "char": "32"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": "\tindex :&#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 32,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": "(f.freelist) - "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 32,
        "char": "1\n"
    },
    {
        "group": "LineNr",
        "row": 33,
        "char": "33"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 33,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " index &lt; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 33,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 34,
        "char": "34"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 34,
        "char": "\t\tf.mu.Unlock()\n"
    },
    {
        "group": "LineNr",
        "row": 35,
        "char": "35"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 35,
        "char": "\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 35,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 35,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 35,
        "char": "new"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 35,
        "char": "(node)\n"
    },
    {
        "group": "LineNr",
        "row": 36,
        "char": "36"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 36,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 37,
        "char": "37"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 37,
        "char": "\tn &#61; f.freelist[index]\n"
    },
    {
        "group": "LineNr",
        "row": 38,
        "char": "38"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 38,
        "char": "\tf.freelist[index] &#61; "
    },
    {
        "group": "goConstants",
        "linkedGroup": "Statement",
        "row": 38,
        "char": "nil\n"
    },
    {
        "group": "LineNr",
        "row": 39,
        "char": "39"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": "\tf.freelist &#61; f.freelist[:index]\n"
    },
    {
        "group": "LineNr",
        "row": 40,
        "char": "40"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 40,
        "char": "\tf.mu.Unlock()\n"
    },
    {
        "group": "LineNr",
        "row": 41,
        "char": "41"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 41,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 41,
        "char": "return\n"
    },
    {
        "group": "LineNr",
        "row": 42,
        "char": "42"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 42,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 43,
        "char": "43"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 43,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 44,
        "char": "44"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 44,
        "char": "// NewWithFreeList creates a new B-Tree that uses the given node free list.\n"
    },
    {
        "group": "LineNr",
        "row": 45,
        "char": "45"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 45,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 45,
        "char": " NewWithFreeList(degree "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 45,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 45,
        "char": ", f *FreeList) *BTree {\n"
    },
    {
        "group": "LineNr",
        "row": 46,
        "char": "46"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 46,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 46,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 46,
        "char": " degree &lt;&#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 46,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 47,
        "char": "47"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 47,
        "char": "\t\t"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 47,
        "char": "panic"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 47,
        "char": "("
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 47,
        "char": "&quot;bad degree&quot;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 47,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 48,
        "char": "48"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 48,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 49,
        "char": "49"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 49,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 49,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 49,
        "char": " &amp;BTree{\n"
    },
    {
        "group": "LineNr",
        "row": 50,
        "char": "50"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 50,
        "char": "\t\tdegree: degree,\n"
    },
    {
        "group": "LineNr",
        "row": 51,
        "char": "51"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 51,
        "char": "\t\tcow:    &amp;copyOnWriteContext{freelist: f},\n"
    },
    {
        "group": "LineNr",
        "row": 52,
        "char": "52"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 53,
        "char": "53"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 53,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 54,
        "char": "54"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 54,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 55,
        "char": "55"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 55,
        "char": "// node is an internal node in a tree.\n"
    },
    {
        "group": "LineNr",
        "row": 56,
        "char": "56"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 56,
        "char": "//\n"
    },
    {
        "group": "LineNr",
        "row": 57,
        "char": "57"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 57,
        "char": "// It must at all times maintain the invariant that either\n"
    },
    {
        "group": "LineNr",
        "row": 58,
        "char": "58"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 58,
        "char": "//   * len(children) &#61;&#61; 0, len(items) unconstrained\n"
    },
    {
        "group": "LineNr",
        "row": 59,
        "char": "59"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 59,
        "char": "//   * len(children) &#61;&#61; len(items) + 1\n"
    },
    {
        "group": "LineNr",
        "row": 60,
        "char": "60"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 60,
        "char": "type"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": " node "
    },
    {
        "group": "goDeclType",
        "linkedGroup": "Statement",
        "row": 60,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 61,
        "char": "61"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 61,
        "char": "\titems    items\n"
    },
    {
        "group": "LineNr",
        "row": 62,
        "char": "62"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": "\tchildren children\n"
    },
    {
        "group": "LineNr",
        "row": 63,
        "char": "63"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": "\tcow      *copyOnWriteContext\n"
    },
    {
        "group": "LineNr",
        "row": 64,
        "char": "64"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 64,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 65,
        "char": "65"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 65,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 66,
        "char": "66"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 66,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 66,
        "char": " (n *node) mutableFor(cow *copyOnWriteContext) *node {\n"
    },
    {
        "group": "LineNr",
        "row": 67,
        "char": "67"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 67,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 67,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 67,
        "char": " n.cow &#61;&#61; cow {\n"
    },
    {
        "group": "LineNr",
        "row": 68,
        "char": "68"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": "\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 68,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 68,
        "char": " n\n"
    },
    {
        "group": "LineNr",
        "row": 69,
        "char": "69"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 69,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 70,
        "char": "70"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 70,
        "char": "\tout :&#61; cow.newNode()\n"
    },
    {
        "group": "LineNr",
        "row": 71,
        "char": "71"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 71,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 71,
        "char": "cap"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": "(out.items) &gt;&#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 71,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": "(n.items) {\n"
    },
    {
        "group": "LineNr",
        "row": 72,
        "char": "72"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 72,
        "char": "\t\tout.items &#61; out.items[:"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 72,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 72,
        "char": "(n.items)]\n"
    },
    {
        "group": "LineNr",
        "row": 73,
        "char": "73"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": "\t} "
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 73,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 74,
        "char": "74"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": "\t\tout.items &#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 74,
        "char": "make"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": "(items, "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 74,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": "(n.items), "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 74,
        "char": "cap"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": "(n.items))\n"
    },
    {
        "group": "LineNr",
        "row": 75,
        "char": "75"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 75,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 76,
        "char": "76"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 76,
        "char": "\t"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 76,
        "char": "copy"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 76,
        "char": "(out.items, n.items)\n"
    },
    {
        "group": "LineNr",
        "row": 77,
        "char": "77"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 77,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 77,
        "char": "// Copy children\n"
    },
    {
        "group": "LineNr",
        "row": 78,
        "char": "78"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "cap"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": "(out.children) &gt;&#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": "(n.children) {\n"
    },
    {
        "group": "LineNr",
        "row": 79,
        "char": "79"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 79,
        "char": "\t\tout.children &#61; out.children[:"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 79,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 79,
        "char": "(n.children)]\n"
    },
    {
        "group": "LineNr",
        "row": 80,
        "char": "80"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 80,
        "char": "\t} "
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 80,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 80,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 81,
        "char": "81"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": "\t\tout.children &#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 81,
        "char": "make"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": "(children, "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 81,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": "(n.children), "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 81,
        "char": "cap"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 81,
        "char": "(n.children))\n"
    },
    {
        "group": "LineNr",
        "row": 82,
        "char": "82"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 82,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 83,
        "char": "83"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 83,
        "char": "\t"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 83,
        "char": "copy"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 83,
        "char": "(out.children, n.children)\n"
    },
    {
        "group": "LineNr",
        "row": 84,
        "char": "84"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 84,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 84,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 84,
        "char": " out\n"
    },
    {
        "group": "LineNr",
        "row": 85,
        "char": "85"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 85,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 86,
        "char": "86"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 86,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 87,
        "char": "87"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 87,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": " (n *node) mutableChild(i "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 87,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": ") *node {\n"
    },
    {
        "group": "LineNr",
        "row": 88,
        "char": "88"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 88,
        "char": "\tc :&#61; n.children[i].mutableFor(n.cow)\n"
    },
    {
        "group": "LineNr",
        "row": 89,
        "char": "89"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 89,
        "char": "\tn.children[i] &#61; c\n"
    },
    {
        "group": "LineNr",
        "row": 90,
        "char": "90"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 90,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 90,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 90,
        "char": " c\n"
    },
    {
        "group": "LineNr",
        "row": 91,
        "char": "91"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 91,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 92,
        "char": "92"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 92,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 93,
        "char": "93"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 93,
        "char": "// remove removes an item from the subtree rooted at this node.\n"
    },
    {
        "group": "LineNr",
        "row": 94,
        "char": "94"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 94,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": " (n *node) remove(item Item, minItems "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 94,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 94,
        "char": ", typ toRemove) Item {\n"
    },
    {
        "group": "LineNr",
        "row": 95,
        "char": "95"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 95,
        "char": "\t"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 95,
        "char": "var"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 95,
        "char": " i "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 95,
        "char": "int\n"
    },
    {
        "group": "LineNr",
        "row": 96,
        "char": "96"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 96,
        "char": "\t"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 96,
        "char": "var"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 96,
        "char": " found "
    },
    {
        "group": "goType",
        "linkedGroup": "Type",
        "row": 96,
        "char": "bool\n"
    },
    {
        "group": "LineNr",
        "row": 97,
        "char": "97"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 97,
        "char": "switch"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": " typ {\n"
    },
    {
        "group": "LineNr",
        "row": 98,
        "char": "98"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 98,
        "char": "\t"
    },
    {
        "group": "goLabel",
        "linkedGroup": "Statement",
        "row": 98,
        "char": "case"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 98,
        "char": " removeMax:\n"
    },
    {
        "group": "LineNr",
        "row": 99,
        "char": "99"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": "\t\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 99,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 99,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": "(n.children) &#61;&#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 99,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 99,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 100,
        "char": "100"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": "\t\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 100,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": " n.items.pop()\n"
    },
    {
        "group": "LineNr",
        "row": 101,
        "char": "101"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 101,
        "char": "\t\t}\n"
    },
    {
        "group": "LineNr",
        "row": 102,
        "char": "102"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": "\t\ti &#61; "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 102,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 102,
        "char": "(n.items)\n"
    },
    {
        "group": "LineNr",
        "row": 103,
        "char": "103"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": "\t"
    },
    {
        "group": "goLabel",
        "linkedGroup": "Statement",
        "row": 103,
        "char": "case"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": " removeMin:\n"
    },
    {
        "group": "LineNr",
        "row": 104,
        "char": "104"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": "\t\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 104,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 104,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": "(n.children) &#61;&#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 104,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 105,
        "char": "105"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 105,
        "char": "\t\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 105,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 105,
        "char": " n.items.removeAt("
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 105,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 105,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 106,
        "char": "106"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 106,
        "char": "\t\t}\n"
    },
    {
        "group": "LineNr",
        "row": 107,
        "char": "107"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 107,
        "char": "\t\ti &#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 107,
        "char": "0\n"
    },
    {
        "group": "LineNr",
        "row": 108,
        "char": "108"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 108,
        "char": "\t"
    },
    {
        "group": "goLabel",
        "linkedGroup": "Statement",
        "row": 108,
        "char": "case"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 108,
        "char": " removeItem:\n"
    },
    {
        "group": "LineNr",
        "row": 109,
        "char": "109"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 109,
        "char": "\t\ti, found &#61; n.items.find(item)\n"
    },
    {
        "group": "LineNr",
        "row": 110,
        "char": "110"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": "\t\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 110,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 110,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": "(n.children) &#61;&#61; "
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 110,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 111,
        "char": "111"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 111,
        "char": "\t\t\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 111,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 111,
        "char": " found {\n"
    },
    {
        "group": "LineNr",
        "row": 112,
        "char": "112"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 112,
        "char": "\t\t\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 112,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 112,
        "char": " n.items.removeAt(i)\n"
    },
    {
        "group": "LineNr",
        "row": 113,
        "char": "113"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": "\t\t\t}\n"
    },
    {
        "group": "LineNr",
        "row": 114,
        "char": "114"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 114,
        "char": "\t\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 114,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 114,
        "char": " "
    },
    {
        "group": "goConstants",
        "linkedGroup": "Statement",
        "row": 114,
        "char": "nil\n"
    },
    {
        "group": "LineNr",
        "row": 115,
        "char": "115"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 115,
        "char": "\t\t}\n"
    },
    {
        "group": "LineNr",
        "row": 116,
        "char": "116"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 116,
        "char": "\t"
    },
    {
        "group": "goLabel",
        "linkedGroup": "Statement",
        "row": 116,
        "char": "default"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 116,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 117,
        "char": "117"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 117,
        "char": "\t\t"
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 117,
        "char": "panic"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 117,
        "char": "("
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 117,
        "char": "&quot;invalid type&quot;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 117,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 118,
        "char": "118"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 118,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 119,
        "char": "119"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 119,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 119,
        "char": "// If we get to here, we have children.\n"
    },
    {
        "group": "LineNr",
        "row": 120,
        "char": "120"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 120,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": " "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 120,
        "char": "len"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": "(n.children[i].items) &lt;&#61; minItems {\n"
    },
    {
        "group": "LineNr",
        "row": 121,
        "char": "121"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 121,
        "char": "\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 121,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 121,
        "char": " n.growChildAndRemove(i, item, minItems, typ)\n"
    },
    {
        "group": "LineNr",
        "row": 122,
        "char": "122"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 122,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 123,
        "char": "123"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 123,
        "char": "\tchild :&#61; n.mutableChild(i)\n"
    },
    {
        "group": "LineNr",
        "row": 124,
        "char": "124"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 124,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 124,
        "char": "// Either we had enough items to begin with, or we&#39;ve done some\n"
    },
    {
        "group": "LineNr",
        "row": 125,
        "char": "125"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 125,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 125,
        "char": "// merging/stealing, because we&#39;ve got enough now and we&#39;re ready to return\n"
    },
    {
        "group": "LineNr",
        "row": 126,
        "char": "126"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 126,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 126,
        "char": "// stuff.\n"
    },
    {
        "group": "LineNr",
        "row": 127,
        "char": "127"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 127,
        "char": "\t"
    },
    {
        "group": "goConditional",
        "linkedGroup": "Statement",
        "row": 127,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 127,
        "char": " found {\n"
    },
    {
        "group": "LineNr",
        "row": 128,
        "char": "128"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 128,
        "char": "\t\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 128,
        "char": "// The item exists at index &#39;i&#39;, and the child we&#39;ve selected can give us a\n"
    },
    {
        "group": "LineNr",
        "row": 129,
        "char": "129"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 129,
        "char": "\t\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 129,
        "char": "// predecessor, since if we&#39;ve gotten here it&#39;s got &gt; minItems items in it.\n"
    },
    {
        "group": "LineNr",
        "row": 130,
        "char": "130"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 130,
        "char": "\t\tout :&#61; n.items[i]\n"
    },
    {
        "group": "LineNr",
        "row": 131,
        "char": "131"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 131,
        "char": "\t\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 131,
        "char": "// We use our special-case &#39;remove&#39; call with typ&#61;maxItem to pull the\n"
    },
    {
        "group": "LineNr",
        "row": 132,
        "char": "132"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 132,
        "char": "\t\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 132,
        "char": "// predecessor of item i (the rightmost leaf of our immediate left child)\n"
    },
    {
        "group": "LineNr",
        "row": 133,
        "char": "133"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 133,
        "char": "\t\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 133,
        "char": "// and set it into where we pulled the item from.\n"
    },
    {
        "group": "LineNr",
        "row": 134,
        "char": "134"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": "\t\tn.items[i] &#61; child.remove("
    },
    {
        "group": "goConstants",
        "linkedGroup": "Statement",
        "row": 134,
        "char": "nil"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": ", minItems, removeMax)\n"
    },
    {
        "group": "LineNr",
        "row": 135,
        "char": "135"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 135,
        "char": "\t\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 135,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 135,
        "char": " out\n"
    },
    {
        "group": "LineNr",
        "row": 136,
        "char": "136"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 136,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 137,
        "char": "137"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 137,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 137,
        "char": "// Final recursive call.  Once we&#39;re here, we know that the item isn&#39;t in this\n"
    },
    {
        "group": "LineNr",
        "row": 138,
        "char": "138"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 138,
        "char": "\t"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 138,
        "char": "// node and that the child is big enough to remove from.\n"
    },
    {
        "group": "LineNr",
        "row": 139,
        "char": "139"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 139,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 139,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 139,
        "char": " child.remove(item, minItems, typ)\n"
    },
    {
        "group": "LineNr",
        "row": 140,
        "char": "140"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 140,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 141,
        "char": "141"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 141,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 142,
        "char": "142"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 142,
        "char": "// Used for testing/debugging purposes.\n"
    },
    {
        "group": "LineNr",
        "row": 143,
        "char": "143"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 143,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": " (n *node) "
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 143,
        "char": "print"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": "(w "
    },
    {
        "group": "goExtraType",
        "linkedGroup": "Type",
        "row": 143,
        "char": "io.Writer"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": ", level "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 143,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": ") {\n"
    },
    {
        "group": "LineNr",
        "row": 144,
        "char": "144"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": "\tfmt.Fprintf(w, "
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "&quot;%sNODE:%v"
    },
    {
        "group": "goEscapeC",
        "linkedGroup": "Special",
        "row": 144,
        "char": "\\n"
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "&quot;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": ", strings.Repeat("
    },
    {
        "group": "goString",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "&quot;  &quot;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": ", level), n.items)\n"
    },
    {
        "group": "LineNr",
        "row": 145,
        "char": "145"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": "\t"
    },
    {
        "group": "goRepeat",
        "linkedGroup": "Statement",
        "row": 145,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": " _, c :&#61; "
    },
    {
        "group": "goRepeat",
        "linkedGroup": "Statement",
        "row": 145,
        "char": "range"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": " n.children {\n"
    },
    {
        "group": "LineNr",
        "row": 146,
        "char": "146"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 146,
        "char": "\t\tc."
    },
    {
        "group": "goBuiltins",
        "linkedGroup": "Statement",
        "row": 146,
        "char": "print"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 146,
        "char": "(w, level+"
    },
    {
        "group": "goDecimalInt",
        "linkedGroup": "Constant",
        "row": 146,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 146,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 147,
        "char": "147"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 147,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 148,
        "char": "148"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 148,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 149,
        "char": "149"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 149,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 150,
        "char": "150"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 150,
        "char": "// BTree is an implementation of a B-Tree.\n"
    },
    {
        "group": "LineNr",
        "row": 151,
        "char": "151"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 151,
        "char": "//\n"
    },
    {
        "group": "LineNr",
        "row": 152,
        "char": "152"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 152,
        "char": "// BTree stores Item instances in an ordered structure, allowing easy insertion,\n"
    },
    {
        "group": "LineNr",
        "row": 153,
        "char": "153"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 153,
        "char": "// removal, and iteration.\n"
    },
    {
        "group": "LineNr",
        "row": 154,
        "char": "154"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 154,
        "char": "//\n"
    },
    {
        "group": "LineNr",
        "row": 155,
        "char": "155"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 155,
        "char": "// Write operations are not safe for concurrent mutation by multiple\n"
    },
    {
        "group": "LineNr",
        "row": 156,
        "char": "156"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 156,
        "char": "// goroutines, but Read operations are.\n"
    },
    {
        "group": "LineNr",
        "row": 157,
        "char": "157"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 157,
        "char": "type"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 157,
        "char": " BTree "
    },
    {
        "group": "goDeclType",
        "linkedGroup": "Statement",
        "row": 157,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 157,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 158,
        "char": "158"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 158,
        "char": "\tdegree "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 158,
        "char": "int\n"
    },
    {
        "group": "LineNr",
        "row": 159,
        "char": "159"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 159,
        "char": "\tlength "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 159,
        "char": "int\n"
    },
    {
        "group": "LineNr",
        "row": 160,
        "char": "160"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 160,
        "char": "\troot   *node\n"
    },
    {
        "group": "LineNr",
        "row": 161,
        "char": "161"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 161,
        "char": "\tcow    *copyOnWriteContext\n"
    },
    {
        "group": "LineNr",
        "row": 162,
        "char": "162"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 162,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 163,
        "char": "163"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 163,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 164,
        "char": "164"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 164,
        "char": "// Has returns true if the given key is in the tree.\n"
    },
    {
        "group": "LineNr",
        "row": 165,
        "char": "165"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 165,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 165,
        "char": " (t *BTree) Has(key Item) "
    },
    {
        "group": "goType",
        "linkedGroup": "Type",
        "row": 165,
        "char": "bool"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 165,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 166,
        "char": "166"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 166,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": " t.Get(key) !&#61; "
    },
    {
        "group": "goConstants",
        "linkedGroup": "Statement",
        "row": 166,
        "char": "nil\n"
    },
    {
        "group": "LineNr",
        "row": 167,
        "char": "167"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 167,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 168,
        "char": "168"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 168,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 169,
        "char": "169"
    },
    {
        "group": "goComment",
        "linkedGroup": "Comment",
        "row": 169,
        "char": "// Len returns the number of items currently in the tree.\n"
    },
    {
        "group": "LineNr",
        "row": 170,
        "char": "170"
    },
    {
        "group": "goDeclaration",
        "linkedGroup": "Statement",
        "row": 170,
        "char": "func"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 170,
        "char": " (t *BTree) Len() "
    },
    {
        "group": "goSignedInts",
        "linkedGroup": "Type",
        "row": 170,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 170,
        "char": " {\n"
    },
    {
        "group": "LineNr",
        "row": 171,
        "char": "171"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 171,
        "char": "\t"
    },
    {
        "group": "goStatement",
        "linkedGroup": "Statement",
        "row": 171,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 171,
        "char": " t.length\n"
    },
    {
        "group": "LineNr",
        "row": 172,
        "char": "172"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 172,
        "char": "}"
    }
]