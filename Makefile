#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
#

clean:
	@rm -rf node_modules/lib &> /dev/null || true &
	@rm -rf lib &> /dev/null || true &
	@rm -f node_modules/Teams.json &> /dev/null || true &
	@rm -rf public/views &> /dev/null || true

reactify: clean
	@${NODE_BIN}/babel ${PWD}/src --out-dir ${PWD}/lib

link: reactify
	ln -s ${PWD}/lib node_modules/lib &
	@ln -s ${PWD}/Teams.json node_modules/Teams.json &
	@ln -s ${PWD}/lib/views ${PWD}/public/views

watch: link
	@${NODE_BIN}/babel ${PWD}/src --watch --out-dir ${PWD}/lib &
	babel app.jsx --watch --out-file server.js &
	@wait

lint: link
	@${NODE_BIN}/standard ${PWD}/src

reload: watch
	@${NODE_BIN}/watchify lib/Load.js -d -o ./public/bundle.js &
	@wait

dev: reload
	@node server.js

prod: clean
	@${NODE_BIN}/browserify lib/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: clean link reactify reload dev prod
