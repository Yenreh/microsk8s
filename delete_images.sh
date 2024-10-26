#!/bin/bash

docker rmi yenreh/apigw:latest
sleep 2
docker rmi yenreh/authservice:latest
sleep 2
docker rmi yenreh/servicio-a:latest
sleep 2
docker rmi yenreh/servicio-b:latest
sleep 2
docker rmi yenreh/servicio-c:latest
sleep 2