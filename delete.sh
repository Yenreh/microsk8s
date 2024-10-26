#!/bin/bash

kubectl delete pod servicio-a-pod
kubectl delete pod servicio-b-pod
kubectl delete pod servicio-c-pod
kubectl delete pod apigw-pod
kubectl delete pod authservice-pod
kubectl delete pod redis-pod

kubectl delete service servicio-a-service
kubectl delete service servicio-b-service
kubectl delete service apigw-service
kubectl delete service authservice-service
kubectl delete service redis-service
