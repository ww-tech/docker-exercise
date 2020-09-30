#!/bin/bash

echo "building image..."
docker build -t toumi007/logger-app:v1 .

echo "pushing the image to docker.hub..."
docker push toumi007/logger-app:v1
