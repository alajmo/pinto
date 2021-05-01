DIST_DIR ?= $(CURDIR)/dist
CHART_DIR ?= $(CURDIR)/traefik
TMPDIR ?= /tmp
HELM_REPO ?= $(CURDIR)/repo
LINT_USE_DOCKER ?= true
LINT_CMD ?= ct lint --config=lint/ct.yaml
PROJECT ?= github.com/traefik/traefik-helm-chart

# Default Target: run all
all: clean test build deploy

test: lint unit-test

# Execute Static Testing
lint: lint-requirements
	echo "== Linting Chart..."
	git fetch traefik master >/dev/null 2>&1 || true

# Execute Unit Testing
unit-test: helm-unittest
	echo "== Unit Testing Chart..."
	helm unittest --color --update-snapshot ./traefik
	echo "== Unit Tests Finished..."

# Generates an artifact containing the Helm Chart in the distribution directory
build: global-requirements $(DIST_DIR)
	echo "== Building Chart..."
	helm package $(CHART_DIR) --destination=$(DIST_DIR)
	echo "== Building Finished"

# Prepare the Helm repository with the latest packaged charts
deploy: global-requirements $(DIST_DIR) $(HELM_REPO)
	@echo "== Deploying Chart..."
	@rm -rf $(CURDIR)/gh-pages.zip
	@curl -sSLO https://$(PROJECT)/archive/gh-pages.zip
	@unzip -oj $(CURDIR)/gh-pages.zip -d $(HELM_REPO)/
	@cp $(DIST_DIR)/*tgz $(CURDIR)/artifacthub-repo.yml $(HELM_REPO)/
	@cp $(CURDIR)/README.md $(HELM_REPO)/index.md
	@echo "== Deploying Finished"

# Cleanup leftovers and distribution dir
clean:
	@echo "== Cleaning..."
	@rm -rf $(DIST_DIR)
	@rm -rf $(HELM_REPO)
	@echo "== Cleaning Finished"

$(DIST_DIR):
	@mkdir -p $(DIST_DIR)

## This directory is git-ignored for now,
## and should become a worktree on the branch gh-pages in the future
$(HELM_REPO):
	@mkdir -p $(HELM_REPO)

global-requirements:
	@echo "== Checking global requirements..."
ifeq ($(LINT_USE_DOCKER),true)
	@command -v docker >/dev/null
	@docker info >/dev/null
else
	@command -v helm >/dev/null
	@command -v git >/dev/null
	@echo "== Global requirements are met."
endif

.PHONY: all global-requirements lint-requirements helm-unittest lint build deploy clean
