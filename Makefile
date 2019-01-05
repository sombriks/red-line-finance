
export PATH := ./node_modules/.bin:$(PATH)
# https://stackoverflow.com/questions/21708839/problems-setting-path-in-makefile
export SHELL := /bin/bash

clean:
	rm -rf docs
	rm -rf assets
	mkdir -p docs/assets/fonts
	mkdir -p assets/fonts

fonts: clean
	cp -R node_modules/material-design-icons-iconfont/dist/* assets/

build: fonts
	NODE_ENV=production browserify src/main.js -o docs/build.js
	cp index.html docs/index.html
	cp -R assets/* docs/assets/

dev: 
	echo $(PATH)
	budo src/main.js:build.js -o -l -H 127.0.0.1
