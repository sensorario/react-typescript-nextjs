container="docker-example"

up:
	docker compose up -d

bash:
	docker exec -it $(container) bash

stop:
	docker compose stop

rm:
	docker rm $(container) --force

rmi:
	docker rmi $$(docker images -q) --force

build:
	docker compose up -d --build

rebuild: stop rm rmi build
