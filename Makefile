#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
#

validate:
	@${NODE_BIN}/standard

clean:
	@rm public/bundle.js &> /dev/null || true

reload:
	@${NODE_BIN}/watchify src/index.jsx -d -t reactify -o ./public/bundle.js &
	@wait

compileServer:
	@${NODE_BIN}/jsx app.js > server.js

dev: clean reload compileServer
	@${NODE_BIN}/nodemon server.js

prod: clean
	@${NODE_BIN}/browserify src/index.jsx | ${NODE_BIN}/uglifyjs > ./public/bundle.js

.PHONY: validate clean dev less server
