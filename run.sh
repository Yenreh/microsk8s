#!/bin/bash
kubectl apply -f authservice/redis.yml
kubectl apply -f authservice/authservice.yml
kubectl apply -f servicioa/servicioa.yml
kubectl apply -f serviciob/serviciob.yml
kubectl apply -f apigw/apigw.yml
#kubectl apply -f serviciorquesta/servicioorquesta.yml