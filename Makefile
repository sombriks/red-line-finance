
clean:
	rm -rf docs
	mkdir -p docs/node_modules/material-design-icons-iconfont/dist/fonts

build: clean
	NODE_ENV=production browserify src/main.js -o docs/build.js
	cp index.html docs/index.html
	# use any other dest folder than node_modules, github pages seems to have blacklisted it 
	cp node_modules/material-design-icons-iconfont/dist/fonts/* docs/node_modules/material-design-icons-iconfont/dist/fonts
	
	