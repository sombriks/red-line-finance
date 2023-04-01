
export PATH := ./node_modules/.bin:$(PATH)

clean:
	rm -rf dist
	rm -rf assets
	mkdir -p dist/assets/fonts
	mkdir -p assets/fonts

fonts: clean
	cp -R node_modules/material-design-icons-iconfont/dist/* assets/

build: fonts
	NODE_ENV=production browserify src/main.js -o dist/build.js
	cp index.html dist/index.html
	cp -R assets/* dist/assets/

dev: 
	budo src/main.js:build.js -o -l -H 127.0.0.1
