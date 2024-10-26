#!/bin/bash
kubectl apply -f authservice/redis.yml
kubectl apply -f authservice/authservice.yml
kubectl apply -f servicioa/servicioa.yml
kubectl apply -f serviciob/serviciob.yml
kubectl apply -f servicioc/servicioc.yml
kubectl apply -f serviciod/serviciod.yml
kubectl apply -f servicioe/servicioe.yml
kubectl apply -f serviciof/serviciof.yml
kubectl apply -f serviciog/serviciog.yml
kubectl apply -f servicioh/servicioh.yml
kubectl apply -f apigw/apigw.yml
sleep 20
kubectl port-forward svc/apigw-service 4000:80