module.exports = [
    {
        "group": "LineNr",
        "row": 1,
        "char": "1"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 1,
        "char": "DIST_DIR "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 1,
        "char": "?&#61; "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 1,
        "char": "$(CURDIR)"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 1,
        "char": "/dist\n"
    },
    {
        "group": "LineNr",
        "row": 2,
        "char": "2"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 2,
        "char": "CHART_DIR "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 2,
        "char": "?&#61; "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 2,
        "char": "$(CURDIR)"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 2,
        "char": "/traefik\n"
    },
    {
        "group": "LineNr",
        "row": 3,
        "char": "3"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 3,
        "char": "TMPDIR "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 3,
        "char": "?&#61; /tmp\n"
    },
    {
        "group": "LineNr",
        "row": 4,
        "char": "4"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 4,
        "char": "HELM_REPO "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": "?&#61; "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 4,
        "char": "$(CURDIR)"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 4,
        "char": "/repo\n"
    },
    {
        "group": "LineNr",
        "row": 5,
        "char": "5"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 5,
        "char": "LINT_USE_DOCKER "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 5,
        "char": "?&#61; true\n"
    },
    {
        "group": "LineNr",
        "row": 6,
        "char": "6"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 6,
        "char": "LINT_CMD "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 6,
        "char": "?&#61; ct lint --config&#61;lint/ct.yaml\n"
    },
    {
        "group": "LineNr",
        "row": 7,
        "char": "7"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 7,
        "char": "PROJECT "
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 7,
        "char": "?&#61; github.com/traefik/traefik-helm-chart\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 9,
        "char": "9"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 9,
        "char": "# Default Target: run all\n"
    },
    {
        "group": "LineNr",
        "row": 10,
        "char": "10"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 10,
        "char": "all:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 10,
        "char": " clean test build deploy\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 12,
        "char": "12"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 12,
        "char": "test:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 12,
        "char": " lint unit-test\n"
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
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 14,
        "char": "# Execute Static Testing\n"
    },
    {
        "group": "LineNr",
        "row": 15,
        "char": "15"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 15,
        "char": "lint:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 15,
        "char": " lint-requirements\n"
    },
    {
        "group": "LineNr",
        "row": 16,
        "char": "16"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 16,
        "char": "\techo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 16,
        "char": "&quot;&#61;&#61; Linting Chart...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 17,
        "char": "17"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 17,
        "char": "\tgit fetch traefik master &gt;/dev/null 2&gt;&amp;1 || true\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 19,
        "char": "19"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 19,
        "char": "# Execute Unit Testing\n"
    },
    {
        "group": "LineNr",
        "row": 20,
        "char": "20"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 20,
        "char": "unit-test:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 20,
        "char": " helm-unittest\n"
    },
    {
        "group": "LineNr",
        "row": 21,
        "char": "21"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 21,
        "char": "\techo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 21,
        "char": "&quot;&#61;&#61; Unit Testing Chart...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 22,
        "char": "22"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 22,
        "char": "\thelm unittest --color --update-snapshot ./traefik\n"
    },
    {
        "group": "LineNr",
        "row": 23,
        "char": "23"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 23,
        "char": "\techo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 23,
        "char": "&quot;&#61;&#61; Unit Tests Finished...&quot;\n"
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
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 25,
        "char": "# Generates an artifact containing the Helm Chart in the distribution directory\n"
    },
    {
        "group": "LineNr",
        "row": 26,
        "char": "26"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 26,
        "char": "build:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 26,
        "char": " global-requirements "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 26,
        "char": "$(DIST_DIR)\n"
    },
    {
        "group": "LineNr",
        "row": 27,
        "char": "27"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 27,
        "char": "\techo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 27,
        "char": "&quot;&#61;&#61; Building Chart...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 28,
        "char": "28"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 28,
        "char": "\thelm package "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 28,
        "char": "$(CHART_DIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 28,
        "char": " --destination&#61;"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 28,
        "char": "$(DIST_DIR)\n"
    },
    {
        "group": "LineNr",
        "row": 29,
        "char": "29"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 29,
        "char": "\techo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 29,
        "char": "&quot;&#61;&#61; Building Finished&quot;\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 31,
        "char": "31"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 31,
        "char": "# Prepare the Helm repository with the latest packaged charts\n"
    },
    {
        "group": "LineNr",
        "row": 32,
        "char": "32"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 32,
        "char": "deploy:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": " global-requirements "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 32,
        "char": "$(DIST_DIR)"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 32,
        "char": " "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 32,
        "char": "$(HELM_REPO)\n"
    },
    {
        "group": "LineNr",
        "row": 33,
        "char": "33"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 33,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 33,
        "char": "&quot;&#61;&#61; Deploying Chart...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 34,
        "char": "34"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 34,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 34,
        "char": "rm -rf "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 34,
        "char": "$(CURDIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 34,
        "char": "/gh-pages.zip\n"
    },
    {
        "group": "LineNr",
        "row": 35,
        "char": "35"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 35,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "curl -sSLO https://"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 35,
        "char": "$(PROJECT)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 35,
        "char": "/archive/gh-pages.zip\n"
    },
    {
        "group": "LineNr",
        "row": 36,
        "char": "36"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 36,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "unzip -oj "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 36,
        "char": "$(CURDIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "/gh-pages.zip -d "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 36,
        "char": "$(HELM_REPO)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 36,
        "char": "/\n"
    },
    {
        "group": "LineNr",
        "row": 37,
        "char": "37"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 37,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 37,
        "char": "cp "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 37,
        "char": "$(DIST_DIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 37,
        "char": "/*tgz "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 37,
        "char": "$(CURDIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 37,
        "char": "/artifacthub-repo.yml "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 37,
        "char": "$(HELM_REPO)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 37,
        "char": "/\n"
    },
    {
        "group": "LineNr",
        "row": 38,
        "char": "38"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 38,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 38,
        "char": "cp "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 38,
        "char": "$(CURDIR)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 38,
        "char": "/README.md "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 38,
        "char": "$(HELM_REPO)"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 38,
        "char": "/index.md\n"
    },
    {
        "group": "LineNr",
        "row": 39,
        "char": "39"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 39,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 39,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 39,
        "char": "&quot;&#61;&#61; Deploying Finished&quot;\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 41,
        "char": "41"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 41,
        "char": "# Cleanup leftovers and distribution dir\n"
    },
    {
        "group": "LineNr",
        "row": 42,
        "char": "42"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 42,
        "char": "clean:\n"
    },
    {
        "group": "LineNr",
        "row": 43,
        "char": "43"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 43,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 43,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 43,
        "char": "&quot;&#61;&#61; Cleaning...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 44,
        "char": "44"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 44,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 44,
        "char": "rm -rf "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 44,
        "char": "$(DIST_DIR)\n"
    },
    {
        "group": "LineNr",
        "row": 45,
        "char": "45"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 45,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 45,
        "char": "rm -rf "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 45,
        "char": "$(HELM_REPO)\n"
    },
    {
        "group": "LineNr",
        "row": 46,
        "char": "46"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 46,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 46,
        "char": "&quot;&#61;&#61; Cleaning Finished&quot;\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 48,
        "char": "48"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 48,
        "char": "$(DIST_DIR)"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 48,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 49,
        "char": "49"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 49,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 49,
        "char": "mkdir -p "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 49,
        "char": "$(DIST_DIR)\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 51,
        "char": "51"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 51,
        "char": "## This directory is git-ignored for now,\n"
    },
    {
        "group": "LineNr",
        "row": 52,
        "char": "52"
    },
    {
        "group": "makeComment",
        "linkedGroup": "Comment",
        "row": 52,
        "char": "## and should become a worktree on the branch gh-pages in the future\n"
    },
    {
        "group": "LineNr",
        "row": 53,
        "char": "53"
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 53,
        "char": "$(HELM_REPO)"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 53,
        "char": ":\n"
    },
    {
        "group": "LineNr",
        "row": 54,
        "char": "54"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 54,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 54,
        "char": "mkdir -p "
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 54,
        "char": "$(HELM_REPO)\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 56,
        "char": "56"
    },
    {
        "group": "makeTarget",
        "linkedGroup": "Identifier",
        "row": 56,
        "char": "global-requirements:\n"
    },
    {
        "group": "LineNr",
        "row": 57,
        "char": "57"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 57,
        "char": "\t@"
    },
    {
        "group": "makeCommands",
        "linkedGroup": "Constant",
        "row": 57,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 57,
        "char": "&quot;&#61;&#61; Checking global requirements...&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 58,
        "char": "58"
    },
    {
        "group": "makePreCondit",
        "linkedGroup": "PreProc",
        "row": 58,
        "char": "ifeq"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": " ("
    },
    {
        "group": "makeIdent",
        "linkedGroup": "Identifier",
        "row": 58,
        "char": "$(LINT_USE_DOCKER)"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 58,
        "char": ",true)\n"
    },
    {
        "group": "LineNr",
        "row": 59,
        "char": "59"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 59,
        "char": "\t@"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 59,
        "char": "command -v docker &gt;/dev/null\n"
    },
    {
        "group": "LineNr",
        "row": 60,
        "char": "60"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 60,
        "char": "\t@"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 60,
        "char": "docker info &gt;/dev/null\n"
    },
    {
        "group": "LineNr",
        "row": 61,
        "char": "61"
    },
    {
        "group": "makePreCondit",
        "linkedGroup": "PreProc",
        "row": 61,
        "char": "else\n"
    },
    {
        "group": "LineNr",
        "row": 62,
        "char": "62"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 62,
        "char": "\t@"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 62,
        "char": "command -v helm &gt;/dev/null\n"
    },
    {
        "group": "LineNr",
        "row": 63,
        "char": "63"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 63,
        "char": "\t@"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 63,
        "char": "command -v git &gt;/dev/null\n"
    },
    {
        "group": "LineNr",
        "row": 64,
        "char": "64"
    },
    {
        "group": "makeSpecial",
        "linkedGroup": "Special",
        "row": 64,
        "char": "\t@"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 64,
        "char": "echo "
    },
    {
        "group": "makeDString",
        "linkedGroup": "Constant",
        "row": 64,
        "char": "&quot;&#61;&#61; Global requirements are met.&quot;\n"
    },
    {
        "group": "LineNr",
        "row": 65,
        "char": "65"
    },
    {
        "group": "makePreCondit",
        "linkedGroup": "PreProc",
        "row": 65,
        "char": "endif\n"
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
        "char": "\n"
    },
    {
        "group": "LineNr",
        "row": 67,
        "char": "67"
    },
    {
        "group": "makeSpecTarget",
        "linkedGroup": "Statement",
        "row": 67,
        "char": ".PHONY:"
    },
    {
        "group": "Normal",
        "linkedGroup": "",
        "row": 67,
        "char": " all global-requirements lint-requirements helm-unittest lint build deploy clean"
    }
]