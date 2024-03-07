# Crypt server v0.1.0

Crypt server component:
* Crypt server

## Usage

```
# build image
docker-compose build
# Start for production
$ docker-compose up -d
# Stop
$ docker-compose down
# Stop & rm volume
$ docker-compose down -v
```

## Develpoer

```
$ cd python-flask-server/swagger_server
# run unit test
$ pytest
$ pytest --cov=./ --disable-warnings --cov-report=html
# check codestyle
$ pylint controllers/

```
## Back up and restore
[Todo]
