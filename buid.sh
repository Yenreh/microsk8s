#!/bin/bash
docker build -t yenreh/apigw ./apigw
docker build -t yenreh/authservice ./authservice
docker build -t yenreh/servicioa ./servicioa
docker build -t yenreh/serviciob ./serviciob
docker build -t yenreh/servicioc ./servicioc
