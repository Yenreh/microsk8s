#!/bin/bash

docker rmi yenreh/apigw
sleep 2
docker rmi yenreh/authservice
sleep 2
docker rmi yenreh/servicio-a
sleep 2
docker rmi yenreh/servicio-b
sleep 2
docker rmi yenreh/servicio-c
sleep 2
docker build -t yenreh/apigw ./apigw
docker build -t yenreh/authservice ./authservice
docker build -t yenreh/servicio-a ./servicioa
docker build -t yenreh/servicio-b ./serviciob
docker build -t yenreh/servicio-c ./servicioc
