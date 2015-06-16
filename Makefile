#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
#

clean:
	@rm -rf node_modules/lib &> /dev/null || true &
	@rm -rf lib &> /dev/null || true

reactify: clean
	@${NODE_BIN}/babel ${PWD}/src --watch --out-dir  ${PWD}/lib &
	@wait

link: reactify
	@ln -s ${PWD}/lib node_modules/lib

lint: link
	@${NODE_BIN}/standard ${PWD}/src

reload: lint
	@${NODE_BIN}/watchify lib/Index.js -d -o ./public/bundle.js &
	@wait

dev: reload
	@${NODE_BIN}/nodemon server.js

prod: clean
	@${NODE_BIN}/browserify lib/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod
