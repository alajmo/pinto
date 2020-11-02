module.exports = [
    {
        "group": "LineNr",
        "row": 1,
        "char": "1"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 1,
        "char": "apiVersion &#61; &quot;apps/v1&quot;\n"
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
        "char": "kind &#61; &quot;StatefulSet&quot;\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": "[metadata]\n"
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
        "char": "name &#61; &quot;web&quot;\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 7,
        "char": "[spec]\n"
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
        "char": "serviceName &#61; &quot;nginx&quot;\n"
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
        "char": "replicas &#61; 3\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 11,
        "char": "[spec.selector.matchLabels]\n"
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
        "char": "app &#61; &quot;nginx&quot;\n"
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
        "char": "\n"
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
        "char": "[spec.template.metadata.labels]\n"
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
        "char": "app &#61; &quot;nginx&quot;\n"
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
        "char": "\n"
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
        "char": "[spec.template.spec]\n"
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
        "char": "terminationGracePeriodSeconds &#61; 10\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 20,
        "char": "  [[spec.template.spec.containers]]\n"
    },
    {
        "group": "LineNr",
        "row": 21,
        "char": "21"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 21,
        "char": "  name &#61; &quot;nginx&quot;\n"
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
        "char": "  image &#61; &quot;k8s.gcr.io/nginx-slim:0.8&quot;\n"
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
        "char": "\n"
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
        "char": "    [[spec.template.spec.containers.ports]]\n"
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
        "char": "    containerPort &#61; 80\n"
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
        "char": "    name &#61; &quot;web&quot;\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 28,
        "char": "    [[spec.template.spec.containers.volumeMounts]]\n"
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
        "char": "    name &#61; &quot;www&quot;\n"
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
        "char": "    mountPath &#61; &quot;/usr/share/nginx/html&quot;\n"
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
        "char": "\n"
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
        "char": "    [[spec.template.spec.containers.env]]\n"
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
        "char": "    name &#61; &quot;ENV&quot;\n"
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
        "char": "    value &#61; &quot;&quot;&quot;\n"
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
        "char": "&#39;Multiline string&#39;\n"
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
        "char": "&#39;Development&#39;\n"
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
        "char": "&quot;&quot;&quot;\n"
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
        "group": "Normal",
        "linkedGroup": "",
        "row": 39,
        "char": "  [[spec.volumeClaimTemplates]]\n"
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
        "char": "[spec.volumeClaimTemplates.metadata]\n"
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
        "char": "name &#61; &quot;www&quot;\n"
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
        "char": "\n"
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
        "char": "[spec.volumeClaimTemplates.spec]\n"
    },
    {
        "group": "LineNr",
        "row": 44,
        "char": "44"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 44,
        "char": "accessModes &#61; [ &quot;ReadWriteOnce&quot; ]\n"
    },
    {
        "group": "LineNr",
        "row": 45,
        "char": "45"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 45,
        "char": "storageClassName &#61; &quot;my-storage-class&quot;\n"
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
        "char": "\n"
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
        "char": "[spec.volumeClaimTemplates.spec.resources.requests]\n"
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
        "char": "storage &#61; &quot;1Gi&quot;"
    }
]