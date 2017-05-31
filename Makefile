
clean:
	rm -rf docs
	mkdir docs

build: clean
	NODE_ENV=production browserify src/main.js -o docs/build.js
	cp index.html docs/index.html
	
	