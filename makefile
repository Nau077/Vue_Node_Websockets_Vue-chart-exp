ROOT:=$(shell pwd)

.PHONY: build/client
build/client: SHELL=bash
build/client:
	@cd client; \
	exec npm install

.PHONY: run/client
run/client: SHELL=bash
run/client:
	@cd client; \
	exec npm run serve


.PHONY: build/server
build/server: SHELL=bash
build/server:
	@cd socket-server; \
	exec npm install

.PHONY: run/server
run/server: SHELL=bash
run/server:
	@cd socket-server; \
	exec npm run server

.PHONY: build
build: SHELL=bash
build:
	@cd socket-server; \
	exec npm install
	@cd client; \
	exec npm install