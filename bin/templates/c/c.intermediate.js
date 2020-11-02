module.exports = [
    {
        "group": "LineNr",
        "row": 1,
        "char": "1"
    },
    {
        "group": "cInclude",
        "linkedGroup": "PreProc",
        "row": 1,
        "char": "#include "
    },
    {
        "group": "cIncluded",
        "linkedGroup": "Constant",
        "row": 1,
        "char": "&lt;linux/btree.h&gt;\n"
    },
    {
        "group": "LineNr",
        "row": 2,
        "char": "2"
    },
    {
        "group": "cInclude",
        "linkedGroup": "PreProc",
        "row": 2,
        "char": "#include "
    },
    {
        "group": "cIncluded",
        "linkedGroup": "Constant",
        "row": 2,
        "char": "&lt;linux/cache.h&gt;\n"
    },
    {
        "group": "LineNr",
        "row": 3,
        "char": "3"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 3,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 4,
        "char": "4"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 4,
        "char": "#define MAX(a, b) ((a) &gt; (b) ? (a) : (b))\n"
    },
    {
        "group": "LineNr",
        "row": 5,
        "char": "5"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 5,
        "char": "#define NODESIZE MAX(L1_CACHE_BYTES, "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 5,
        "char": "128"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 5,
        "char": ")\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 7,
        "char": "7"
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 7,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 7,
        "char": " btree_geo {\n"
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
        "group": "cType",
        "linkedGroup": "Type",
        "row": 8,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 8,
        "char": " keylen;\n"
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
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 9,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 9,
        "char": " no_pairs;\n"
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
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 10,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 10,
        "char": " no_longs;\n"
    },
    {
        "group": "LineNr",
        "row": 11,
        "char": "11"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 11,
        "char": "};\n"
    },
    {
        "group": "LineNr",
        "row": 12,
        "char": "12"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 12,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 13,
        "char": "13"
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 13,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 13,
        "char": " btree_geo btree_geo32 &#61; {\n"
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
        "char": "\t.keylen &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 14,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 14,
        "char": ",\n"
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
        "char": "\t.no_pairs &#61; NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 15,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 15,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": ") / "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 15,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": ",\n"
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
        "char": "\t.no_longs &#61; NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 16,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 16,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": ") / "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 16,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 16,
        "char": ",\n"
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
        "char": "};\n"
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
        "char": "EXPORT_SYMBOL_GPL(btree_geo32);\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 20,
        "char": "20"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 20,
        "char": "#define LONG_PER_U64 ("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 20,
        "char": "64"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 20,
        "char": " / BITS_PER_LONG)\n"
    },
    {
        "group": "LineNr",
        "row": 21,
        "char": "21"
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 21,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 21,
        "char": " btree_geo btree_geo64 &#61; {\n"
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
        "char": "\t.keylen &#61; LONG_PER_U64,\n"
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
        "char": "\t.no_pairs &#61; NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 23,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 23,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 23,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 23,
        "char": ") / ("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 23,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 23,
        "char": " + LONG_PER_U64),\n"
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
        "char": "\t.no_longs &#61; LONG_PER_U64 * (NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 24,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 24,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": ") / ("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 24,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 24,
        "char": " + LONG_PER_U64)),\n"
    },
    {
        "group": "LineNr",
        "row": 25,
        "char": "25"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 25,
        "char": "};\n"
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
        "char": "EXPORT_SYMBOL_GPL(btree_geo64);\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 28,
        "char": "28"
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 28,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 28,
        "char": " btree_geo btree_geo128 &#61; {\n"
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
        "char": "\t.keylen &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 29,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 29,
        "char": " * LONG_PER_U64,\n"
    },
    {
        "group": "LineNr",
        "row": 30,
        "char": "30"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": "\t.no_pairs &#61; NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 30,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 30,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": ") / ("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 30,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": " + "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 30,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 30,
        "char": " * LONG_PER_U64),\n"
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
        "char": "\t.no_longs &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": " * LONG_PER_U64 * (NODESIZE / "
    },
    {
        "group": "cOperator",
        "linkedGroup": "Statement",
        "row": 31,
        "char": "sizeof"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": "("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 31,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": ") / ("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": " + "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 31,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 31,
        "char": " * LONG_PER_U64)),\n"
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
        "char": "};\n"
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
        "char": "EXPORT_SYMBOL_GPL(btree_geo128);\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 35,
        "char": "35"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 35,
        "char": "#define MAX_KEYLEN\t("
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "2"
    },
    {
        "group": "cDefine",
        "linkedGroup": "PreProc",
        "row": 35,
        "char": " * LONG_PER_U64)\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 37,
        "char": "37"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 37,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 37,
        "char": " "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 37,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 37,
        "char": " kmem_cache *btree_cachep;\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 39,
        "char": "39"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 39,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": " *btree_alloc(gfp_t gfp_mask, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 39,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": " *pool_data)\n"
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
        "char": "{\n"
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
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 41,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 41,
        "char": " kmem_cache_alloc(btree_cachep, gfp_mask);\n"
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
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 44,
        "char": "/*\n"
    },
    {
        "group": "LineNr",
        "row": 45,
        "char": "45"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 45,
        "char": " * Usually this function is quite similar to normal lookup.  But the key of\n"
    },
    {
        "group": "LineNr",
        "row": 46,
        "char": "46"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 46,
        "char": " * a parent node may be smaller than the smallest key of all its siblings.\n"
    },
    {
        "group": "LineNr",
        "row": 47,
        "char": "47"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 47,
        "char": " * In such a case we cannot just return NULL, as we have only proven that no\n"
    },
    {
        "group": "LineNr",
        "row": 48,
        "char": "48"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 48,
        "char": " * key smaller than __key, but larger than this parent key exists.\n"
    },
    {
        "group": "LineNr",
        "row": 49,
        "char": "49"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 49,
        "char": " * So we set __key to the parent key and retry.  We have to use the smallest\n"
    },
    {
        "group": "LineNr",
        "row": 50,
        "char": "50"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 50,
        "char": " * such parent key, which is the last parent key we encountered.\n"
    },
    {
        "group": "LineNr",
        "row": 51,
        "char": "51"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 51,
        "char": " "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 51,
        "char": "*/\n"
    },
    {
        "group": "LineNr",
        "row": 52,
        "char": "52"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 52,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": " *btree_get_prev("
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 52,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": " btree_head *head, "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 52,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 52,
        "char": " btree_geo *geo,\n"
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
        "char": "\t\t     "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 53,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 53,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 53,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 53,
        "char": " *__key)\n"
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
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 55,
        "char": "55"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 55,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 55,
        "char": " i, height;\n"
    },
    {
        "group": "LineNr",
        "row": 56,
        "char": "56"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 56,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 56,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 56,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 56,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 56,
        "char": " *node, *oldnode;\n"
    },
    {
        "group": "LineNr",
        "row": 57,
        "char": "57"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 57,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 57,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": " *retry_key &#61; "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 57,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 57,
        "char": ", key[MAX_KEYLEN];\n"
    },
    {
        "group": "LineNr",
        "row": 58,
        "char": "58"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 59,
        "char": "59"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 59,
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 59,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 59,
        "char": " (keyzero(geo, __key))\n"
    },
    {
        "group": "LineNr",
        "row": 60,
        "char": "60"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 60,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": " "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 60,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": ";\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 62,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": " (head-&gt;height &#61;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 62,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": ")\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 63,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": " "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 63,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": ";\n"
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
        "char": "\tlongcpy(key, __key, geo-&gt;keylen);\n"
    },
    {
        "group": "LineNr",
        "row": 65,
        "char": "65"
    },
    {
        "group": "cUserLabel",
        "linkedGroup": "Statement",
        "row": 65,
        "char": "retry"
    },
    {
        "group": "cUserCont",
        "linkedGroup": "cUserCont",
        "row": 65,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 66,
        "char": "66"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 66,
        "char": "\tdec_key(geo, key);\n"
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
        "char": "\n"
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
        "char": "\tnode &#61; head-&gt;node;\n"
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
        "char": "\t"
    },
    {
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 69,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 69,
        "char": " (height &#61; head-&gt;height ; height &gt; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 69,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 69,
        "char": "; height--) {\n"
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
        "char": "\t\t"
    },
    {
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 70,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 70,
        "char": " (i &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 70,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 70,
        "char": "; i &lt; geo-&gt;no_pairs; i++)\n"
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
        "char": "\t\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 71,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": " (keycmp(geo, node, i, key) &lt;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 71,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 71,
        "char": ")\n"
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
        "char": "\t\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 72,
        "char": "break"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 72,
        "char": ";\n"
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
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 73,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 73,
        "char": " (i &#61;&#61; geo-&gt;no_pairs)\n"
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
        "char": "\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 74,
        "char": "goto"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 74,
        "char": " miss;\n"
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
        "char": "\t\toldnode &#61; node;\n"
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
        "char": "\t\tnode &#61; bval(geo, node, i);\n"
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
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 77,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 77,
        "char": " (!node)\n"
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
        "char": "\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 78,
        "char": "goto"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 78,
        "char": " miss;\n"
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
        "char": "\t\tretry_key &#61; bkey(geo, oldnode, i);\n"
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
        "char": "\t}\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 82,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 82,
        "char": " (!node)\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 83,
        "char": "goto"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 83,
        "char": " miss;\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 85,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 85,
        "char": " (i &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 85,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 85,
        "char": "; i &lt; geo-&gt;no_pairs; i++) {\n"
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
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 86,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 86,
        "char": " (keycmp(geo, node, i, key) &lt;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 86,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 86,
        "char": ") {\n"
    },
    {
        "group": "LineNr",
        "row": 87,
        "char": "87"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": "\t\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 87,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 87,
        "char": " (bval(geo, node, i)) {\n"
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
        "char": "\t\t\t\tlongcpy(__key, bkey(geo, node, i), geo-&gt;keylen);\n"
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
        "char": "\t\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 89,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 89,
        "char": " bval(geo, node, i);\n"
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
        "char": "\t\t\t} "
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 90,
        "char": "else\n"
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
        "char": "\t\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 91,
        "char": "goto"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 91,
        "char": " miss;\n"
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
        "char": "\t\t}\n"
    },
    {
        "group": "LineNr",
        "row": 93,
        "char": "93"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 93,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 94,
        "char": "94"
    },
    {
        "group": "cUserLabel",
        "linkedGroup": "Statement",
        "row": 94,
        "char": "miss"
    },
    {
        "group": "cUserCont",
        "linkedGroup": "cUserCont",
        "row": 94,
        "char": ":\n"
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
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 95,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 95,
        "char": " (retry_key) {\n"
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
        "char": "\t\tlongcpy(key, retry_key, geo-&gt;keylen);\n"
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
        "char": "\t\tretry_key &#61; "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 97,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 97,
        "char": ";\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 98,
        "char": "goto"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 98,
        "char": " retry;\n"
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
        "char": "\t}\n"
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
        "char": "\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 100,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": " "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 100,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 100,
        "char": ";\n"
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
        "char": "}\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 103,
        "char": "103"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 103,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 103,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": " *btree_remove_level("
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 103,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": " btree_head *head, "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 103,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 103,
        "char": " btree_geo *geo,\n"
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
        "group": "cType",
        "linkedGroup": "Type",
        "row": 104,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 104,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": " *key, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 104,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 104,
        "char": " level)\n"
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
        "char": "{\n"
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
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 106,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 106,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 106,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 106,
        "char": " *node;\n"
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
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 107,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 107,
        "char": " i, pos, fill;\n"
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
        "group": "cType",
        "linkedGroup": "Type",
        "row": 108,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 108,
        "char": " *ret;\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 110,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 110,
        "char": " (level &gt; head-&gt;height) {\n"
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
        "char": "\t\t"
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 111,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 111,
        "char": " we recursed all the way up "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 111,
        "char": "*/\n"
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
        "char": "\t\thead-&gt;height &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 112,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 112,
        "char": ";\n"
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
        "char": "\t\thead-&gt;node &#61; "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 113,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 113,
        "char": ";\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
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
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 114,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 114,
        "char": ";\n"
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
        "char": "\t}\n"
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
        "char": "\n"
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
        "char": "\tnode &#61; find_level(head, geo, key, level);\n"
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
        "char": "\tpos &#61; getpos(geo, node, key);\n"
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
        "char": "\tfill &#61; getfill(geo, node, pos);\n"
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
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 120,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": " ((level &#61;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 120,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": ") &amp;&amp; (keycmp(geo, node, pos, key) !&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 120,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 120,
        "char": "))\n"
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
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 121,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 121,
        "char": " "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 121,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 121,
        "char": ";\n"
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
        "char": "\tret &#61; bval(geo, node, pos);\n"
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
        "char": "\n"
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
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 124,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 124,
        "char": " remove and shift "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 124,
        "char": "*/\n"
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
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 125,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 125,
        "char": " (i &#61; pos; i &lt; fill - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 125,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 125,
        "char": "; i++) {\n"
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
        "char": "\t\tsetkey(geo, node, i, bkey(geo, node, i + "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 126,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 126,
        "char": "));\n"
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
        "char": "\t\tsetval(geo, node, i, bval(geo, node, i + "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 127,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 127,
        "char": "));\n"
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
        "char": "\t}\n"
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
        "char": "\tclearpair(geo, node, fill - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 129,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 129,
        "char": ");\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 131,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 131,
        "char": " (fill - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 131,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 131,
        "char": " &lt; geo-&gt;no_pairs / "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 131,
        "char": "2"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 131,
        "char": ") {\n"
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
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 132,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 132,
        "char": " (level &lt; head-&gt;height)\n"
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
        "char": "\t\t\trebalance(head, geo, key, level, node, fill - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 133,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 133,
        "char": ");\n"
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
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 134,
        "char": "else"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": " "
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 134,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": " (fill - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 134,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": " &#61;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 134,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 134,
        "char": ")\n"
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
        "char": "\t\t\tbtree_shrink(head, geo);\n"
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
        "char": "\n"
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
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 138,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 138,
        "char": " ret;\n"
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
        "char": "}\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 141,
        "char": "141"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 141,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 141,
        "char": " *btree_remove("
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 141,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 141,
        "char": " btree_head *head, "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 141,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 141,
        "char": " btree_geo *geo,\n"
    },
    {
        "group": "LineNr",
        "row": 142,
        "char": "142"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 142,
        "char": "\t\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 142,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 142,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 142,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 142,
        "char": " *key)\n"
    },
    {
        "group": "LineNr",
        "row": 143,
        "char": "143"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 143,
        "char": "{\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 144,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": " (head-&gt;height &#61;&#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 144,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 144,
        "char": ")\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 145,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": " "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 145,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 145,
        "char": ";\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 147,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 147,
        "char": " btree_remove_level(head, geo, key, "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 147,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 147,
        "char": ");\n"
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
        "char": "EXPORT_SYMBOL_GPL(btree_remove);\n"
    },
    {
        "group": "LineNr",
        "row": 150,
        "char": "150"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 150,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 151,
        "char": "151"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 151,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 151,
        "char": " btree_merge("
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 151,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 151,
        "char": " btree_head *target, "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 151,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 151,
        "char": " btree_head *victim,\n"
    },
    {
        "group": "LineNr",
        "row": 152,
        "char": "152"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 152,
        "char": "\t\t"
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 152,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 152,
        "char": " btree_geo *geo, gfp_t gfp)\n"
    },
    {
        "group": "LineNr",
        "row": 153,
        "char": "153"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 153,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 154,
        "char": "154"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 154,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 154,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 154,
        "char": " key[MAX_KEYLEN];\n"
    },
    {
        "group": "LineNr",
        "row": 155,
        "char": "155"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 155,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 155,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 155,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 155,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 155,
        "char": " dup[MAX_KEYLEN];\n"
    },
    {
        "group": "LineNr",
        "row": 156,
        "char": "156"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 156,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 156,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 156,
        "char": " *val;\n"
    },
    {
        "group": "LineNr",
        "row": 157,
        "char": "157"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 157,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 157,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 157,
        "char": " err;\n"
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
        "char": "\n"
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
        "char": "\tBUG_ON(target &#61;&#61; victim);\n"
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
        "char": "\n"
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
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 161,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 161,
        "char": " (!(target-&gt;node)) {\n"
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
        "char": "\t\t"
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 162,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 162,
        "char": " target is empty, just copy fields over "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 162,
        "char": "*/\n"
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
        "char": "\t\ttarget-&gt;node &#61; victim-&gt;node;\n"
    },
    {
        "group": "LineNr",
        "row": 164,
        "char": "164"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 164,
        "char": "\t\ttarget-&gt;height &#61; victim-&gt;height;\n"
    },
    {
        "group": "LineNr",
        "row": 165,
        "char": "165"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 165,
        "char": "\t\t__btree_init(victim);\n"
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
        "char": "\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 166,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": " "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 166,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 166,
        "char": ";\n"
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
        "char": "\t}\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 169,
        "char": "\t"
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 169,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 169,
        "char": " "
    },
    {
        "group": "cTodo",
        "linkedGroup": "Todo",
        "row": 169,
        "char": "TODO"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 169,
        "char": ": This needs some optimizations.  Currently we do three tree\n"
    },
    {
        "group": "LineNr",
        "row": 170,
        "char": "170"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 170,
        "char": "\t * walks to remove a single object from the victim.\n"
    },
    {
        "group": "LineNr",
        "row": 171,
        "char": "171"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 171,
        "char": "\t "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 171,
        "char": "*/\n"
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
        "char": "\t"
    },
    {
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 172,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 172,
        "char": " (;;) {\n"
    },
    {
        "group": "LineNr",
        "row": 173,
        "char": "173"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 173,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 173,
        "char": " (!btree_last(victim, geo, key))\n"
    },
    {
        "group": "LineNr",
        "row": 174,
        "char": "174"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 174,
        "char": "\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 174,
        "char": "break"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 174,
        "char": ";\n"
    },
    {
        "group": "LineNr",
        "row": 175,
        "char": "175"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 175,
        "char": "\t\tval &#61; btree_lookup(victim, geo, key);\n"
    },
    {
        "group": "LineNr",
        "row": 176,
        "char": "176"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 176,
        "char": "\t\terr &#61; btree_insert(target, geo, key, val, gfp);\n"
    },
    {
        "group": "LineNr",
        "row": 177,
        "char": "177"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 177,
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 177,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 177,
        "char": " (err)\n"
    },
    {
        "group": "LineNr",
        "row": 178,
        "char": "178"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 178,
        "char": "\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 178,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 178,
        "char": " err;\n"
    },
    {
        "group": "LineNr",
        "row": 179,
        "char": "179"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 179,
        "char": "\t\t"
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 179,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 179,
        "char": " We must make a copy of the key, as the original will get\n"
    },
    {
        "group": "LineNr",
        "row": 180,
        "char": "180"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 180,
        "char": "\t\t * mangled inside btree_remove. "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 180,
        "char": "*/\n"
    },
    {
        "group": "LineNr",
        "row": 181,
        "char": "181"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 181,
        "char": "\t\tlongcpy(dup, key, geo-&gt;keylen);\n"
    },
    {
        "group": "LineNr",
        "row": 182,
        "char": "182"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 182,
        "char": "\t\tbtree_remove(victim, geo, dup);\n"
    },
    {
        "group": "LineNr",
        "row": 183,
        "char": "183"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 183,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 184,
        "char": "184"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": "\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 184,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": " "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 184,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 184,
        "char": ";\n"
    },
    {
        "group": "LineNr",
        "row": 185,
        "char": "185"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 185,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 186,
        "char": "186"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 186,
        "char": "EXPORT_SYMBOL_GPL(btree_merge);\n"
    },
    {
        "group": "LineNr",
        "row": 187,
        "char": "187"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 187,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 188,
        "char": "188"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 188,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 188,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": " __btree_for_each("
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 188,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": " btree_head *head, "
    },
    {
        "group": "cStructure",
        "linkedGroup": "Type",
        "row": 188,
        "char": "struct"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 188,
        "char": " btree_geo *geo,\n"
    },
    {
        "group": "LineNr",
        "row": 189,
        "char": "189"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": "\t\t\t       "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 189,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 189,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": " *node, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 189,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 189,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 189,
        "char": " opaque,\n"
    },
    {
        "group": "LineNr",
        "row": 190,
        "char": "190"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": "\t\t\t       "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 190,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": " (*func)("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 190,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": " *elem, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 190,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 190,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 190,
        "char": " opaque,\n"
    },
    {
        "group": "LineNr",
        "row": 191,
        "char": "191"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": "\t\t\t\t\t    "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 191,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 191,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": " *key, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 191,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 191,
        "char": " index,\n"
    },
    {
        "group": "LineNr",
        "row": 192,
        "char": "192"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 192,
        "char": "\t\t\t\t\t    "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 192,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 192,
        "char": " *func2),\n"
    },
    {
        "group": "LineNr",
        "row": 193,
        "char": "193"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": "\t\t\t       "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 193,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": " *func2, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 193,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": " reap, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 193,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": " height, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 193,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 193,
        "char": " count)\n"
    },
    {
        "group": "LineNr",
        "row": 194,
        "char": "194"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 194,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 195,
        "char": "195"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 195,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 195,
        "char": " i;\n"
    },
    {
        "group": "LineNr",
        "row": 196,
        "char": "196"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 196,
        "char": "\t"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 196,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 196,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 196,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 196,
        "char": " *child;\n"
    },
    {
        "group": "LineNr",
        "row": 197,
        "char": "197"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 197,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 198,
        "char": "198"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 198,
        "char": "\t"
    },
    {
        "group": "cRepeat",
        "linkedGroup": "Statement",
        "row": 198,
        "char": "for"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 198,
        "char": " (i &#61; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 198,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 198,
        "char": "; i &lt; geo-&gt;no_pairs; i++) {\n"
    },
    {
        "group": "LineNr",
        "row": 199,
        "char": "199"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 199,
        "char": "\t\tchild &#61; bval(geo, node, i);\n"
    },
    {
        "group": "LineNr",
        "row": 200,
        "char": "200"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 200,
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 200,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 200,
        "char": " (!child)\n"
    },
    {
        "group": "LineNr",
        "row": 201,
        "char": "201"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 201,
        "char": "\t\t\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 201,
        "char": "break"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 201,
        "char": ";\n"
    },
    {
        "group": "LineNr",
        "row": 202,
        "char": "202"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 202,
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 202,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 202,
        "char": " (height &gt; "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 202,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 202,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 203,
        "char": "203"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 203,
        "char": "\t\t\tcount &#61; __btree_for_each(head, geo, child, opaque,\n"
    },
    {
        "group": "LineNr",
        "row": 204,
        "char": "204"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 204,
        "char": "\t\t\t\t\tfunc, func2, reap, height - "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 204,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 204,
        "char": ", count);\n"
    },
    {
        "group": "LineNr",
        "row": 205,
        "char": "205"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 205,
        "char": "\t\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 205,
        "char": "else\n"
    },
    {
        "group": "LineNr",
        "row": 206,
        "char": "206"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 206,
        "char": "\t\t\tfunc(child, opaque, bkey(geo, node, i), count++,\n"
    },
    {
        "group": "LineNr",
        "row": 207,
        "char": "207"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 207,
        "char": "\t\t\t\t\tfunc2);\n"
    },
    {
        "group": "LineNr",
        "row": 208,
        "char": "208"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 208,
        "char": "\t}\n"
    },
    {
        "group": "LineNr",
        "row": 209,
        "char": "209"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 209,
        "char": "\t"
    },
    {
        "group": "cConditional",
        "linkedGroup": "Statement",
        "row": 209,
        "char": "if"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 209,
        "char": " (reap)\n"
    },
    {
        "group": "LineNr",
        "row": 210,
        "char": "210"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 210,
        "char": "\t\tmempool_free(node, head-&gt;mempool);\n"
    },
    {
        "group": "LineNr",
        "row": 211,
        "char": "211"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 211,
        "char": "\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 211,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 211,
        "char": " count;\n"
    },
    {
        "group": "LineNr",
        "row": 212,
        "char": "212"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 212,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 213,
        "char": "213"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 213,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 214,
        "char": "214"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 214,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " empty("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " *elem, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " opaque, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 214,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 214,
        "char": " *key,\n"
    },
    {
        "group": "LineNr",
        "row": 215,
        "char": "215"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 215,
        "char": "\t\t  "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 215,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 215,
        "char": " index, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 215,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 215,
        "char": " *func2)\n"
    },
    {
        "group": "LineNr",
        "row": 216,
        "char": "216"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 216,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 217,
        "char": "217"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 217,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 218,
        "char": "218"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 218,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 219,
        "char": "219"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " visitorl("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " *elem, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " opaque, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 219,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 219,
        "char": " *key,\n"
    },
    {
        "group": "LineNr",
        "row": 220,
        "char": "220"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 220,
        "char": "\t      "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 220,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 220,
        "char": " index, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 220,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 220,
        "char": " *__func)\n"
    },
    {
        "group": "LineNr",
        "row": 221,
        "char": "221"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 221,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 222,
        "char": "222"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 222,
        "char": "\tvisitorl_t func &#61; __func;\n"
    },
    {
        "group": "LineNr",
        "row": 223,
        "char": "223"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 223,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 224,
        "char": "224"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 224,
        "char": "\tfunc(elem, opaque, *key, index);\n"
    },
    {
        "group": "LineNr",
        "row": 225,
        "char": "225"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 225,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 226,
        "char": "226"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 226,
        "char": "EXPORT_SYMBOL_GPL(visitorl);\n"
    },
    {
        "group": "LineNr",
        "row": 227,
        "char": "227"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 227,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 228,
        "char": "228"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " visitor32("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " *elem, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " opaque, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 228,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 228,
        "char": " *__key,\n"
    },
    {
        "group": "LineNr",
        "row": 229,
        "char": "229"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 229,
        "char": "\t       "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 229,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 229,
        "char": " index, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 229,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 229,
        "char": " *__func)\n"
    },
    {
        "group": "LineNr",
        "row": 230,
        "char": "230"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 230,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 231,
        "char": "231"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 231,
        "char": "\tvisitor32_t func &#61; __func;\n"
    },
    {
        "group": "LineNr",
        "row": 232,
        "char": "232"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 232,
        "char": "\tu32 *key &#61; ("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 232,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 232,
        "char": " *)__key;\n"
    },
    {
        "group": "LineNr",
        "row": 233,
        "char": "233"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 233,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 234,
        "char": "234"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 234,
        "char": "\tfunc(elem, opaque, *key, index);\n"
    },
    {
        "group": "LineNr",
        "row": 235,
        "char": "235"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 235,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 236,
        "char": "236"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 236,
        "char": "EXPORT_SYMBOL_GPL(visitor32);\n"
    },
    {
        "group": "LineNr",
        "row": 237,
        "char": "237"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 237,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 238,
        "char": "238"
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " visitor64("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " *elem, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " opaque, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "unsigned"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 238,
        "char": "long"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 238,
        "char": " *__key,\n"
    },
    {
        "group": "LineNr",
        "row": 239,
        "char": "239"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 239,
        "char": "\t       "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 239,
        "char": "size_t"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 239,
        "char": " index, "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 239,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 239,
        "char": " *__func)\n"
    },
    {
        "group": "LineNr",
        "row": 240,
        "char": "240"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 240,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 241,
        "char": "241"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 241,
        "char": "\tvisitor64_t func &#61; __func;\n"
    },
    {
        "group": "LineNr",
        "row": 242,
        "char": "242"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 242,
        "char": "\tu64 *key &#61; ("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 242,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 242,
        "char": " *)__key;\n"
    },
    {
        "group": "LineNr",
        "row": 243,
        "char": "243"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 243,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 244,
        "char": "244"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 244,
        "char": "\tfunc(elem, opaque, *key, index);\n"
    },
    {
        "group": "LineNr",
        "row": 245,
        "char": "245"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 245,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 246,
        "char": "246"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 246,
        "char": "EXPORT_SYMBOL_GPL(visitor64);\n"
    },
    {
        "group": "LineNr",
        "row": 247,
        "char": "247"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 247,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 248,
        "char": "248"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 248,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 248,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 248,
        "char": "int"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 248,
        "char": " __init btree_module_init("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 248,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 248,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 249,
        "char": "249"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 249,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 250,
        "char": "250"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 250,
        "char": "\tbtree_cachep &#61; kmem_cache_create("
    },
    {
        "group": "cString",
        "linkedGroup": "Constant",
        "row": 250,
        "char": "&quot;btree_node&quot;"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 250,
        "char": ", NODESIZE, "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 250,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 250,
        "char": ",\n"
    },
    {
        "group": "LineNr",
        "row": 251,
        "char": "251"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 251,
        "char": "\t\t\tSLAB_HWCACHE_ALIGN, "
    },
    {
        "group": "cConstant",
        "linkedGroup": "Constant",
        "row": 251,
        "char": "NULL"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 251,
        "char": ");\n"
    },
    {
        "group": "LineNr",
        "row": 252,
        "char": "252"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 252,
        "char": "\t"
    },
    {
        "group": "cStatement",
        "linkedGroup": "Statement",
        "row": 252,
        "char": "return"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 252,
        "char": " "
    },
    {
        "group": "cNumber",
        "linkedGroup": "Constant",
        "row": 252,
        "char": "0"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 252,
        "char": ";\n"
    },
    {
        "group": "LineNr",
        "row": 253,
        "char": "253"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 253,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 254,
        "char": "254"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 254,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 255,
        "char": "255"
    },
    {
        "group": "cStorageClass",
        "linkedGroup": "Type",
        "row": 255,
        "char": "static"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 255,
        "char": " "
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 255,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 255,
        "char": " __exit btree_module_exit("
    },
    {
        "group": "cType",
        "linkedGroup": "Type",
        "row": 255,
        "char": "void"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 255,
        "char": ")\n"
    },
    {
        "group": "LineNr",
        "row": 256,
        "char": "256"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 256,
        "char": "{\n"
    },
    {
        "group": "LineNr",
        "row": 257,
        "char": "257"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 257,
        "char": "\tkmem_cache_destroy(btree_cachep);\n"
    },
    {
        "group": "LineNr",
        "row": 258,
        "char": "258"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 258,
        "char": "}\n"
    },
    {
        "group": "LineNr",
        "row": 259,
        "char": "259"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 259,
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 260,
        "char": "260"
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 260,
        "char": "/*"
    },
    {
        "group": "cComment",
        "linkedGroup": "Comment",
        "row": 260,
        "char": " If core code starts using btree, initialization should happen even earlier "
    },
    {
        "group": "cCommentStart",
        "linkedGroup": "Comment",
        "row": 260,
        "char": "*/\n"
    },
    {
        "group": "LineNr",
        "row": 261,
        "char": "261"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 261,
        "char": "module_init(btree_module_init);\n"
    },
    {
        "group": "LineNr",
        "row": 262,
        "char": "262"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 262,
        "char": "module_exit(btree_module_exit);"
    }
]