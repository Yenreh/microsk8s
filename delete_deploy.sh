#!/bin/bash

kubectl delete pod servicio-a-pod
kubectl delete pod servicio-b-pod
kubectl delete pod servicio-c-pod
kubectl delete pod servicio-d-pod
kubectl delete pod servicio-e-pod
kubectl delete pod servicio-f-pod
kubectl delete pod servicio-g-pod
kubectl delete pod servicio-h-pod
kubectl delete pod apigw-pod
kubectl delete pod authservice-pod
kubectl delete pod redis-pod

kubectl delete service servicio-a-service
kubectl delete service servicio-b-service
kubectl delete service servicio-c-service
kubectl delete service servicio-d-service
kubectl delete service servicio-e-service
kubectl delete service servicio-f-service
kubectl delete service servicio-g-service
kubectl delete service servicio-h-service
kubectl delete service apigw-service
kubectl delete service authservice-service
kubectl delete service redis-service
