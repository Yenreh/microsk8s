#!/bin/bash

docker rmi yenreh/apigw
docker rmi yenreh/authservice
docker rmi yenreh/servicio-a
docker rmi yenreh/servicio-b
docker rmi yenreh/servicio-c

docker build -t yenreh/apigw ./apigw
docker build -t yenreh/authservice ./authservice
docker build -t yenreh/servicio-a ./servicioa
docker build -t yenreh/servicio-b ./serviciob
docker build -t yenreh/servicio-c ./servicioc
