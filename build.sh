#!/bin/bash

docker build -t yenreh/apigw ./apigw
docker build -t yenreh/authservice ./authservice
docker build -t yenreh/servicio-a ./servicioa
docker build -t yenreh/servicio-b ./serviciob
docker build -t yenreh/servicio-c ./servicioc
