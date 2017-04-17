
clean:
	rm -rf dist
	mkdir dist

build: clean
	browserify src/main.js -o dist/build.js
	cp index.html dist/index.html
	
	