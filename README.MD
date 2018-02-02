# Overview

ZetaPush can be extended by NodeJs
We want to allow the developer to easily host his code (on our servers or not)

# Kubernetes

Kubernetes seems to be a good candidate
* Simple installation
* single load increase
* used by many actors (Microsoft, Google,...)

# Principle (to be validated)

## Deployment of the developer's source code
The developer deploys its source code on a Git (owned by ZetaPush?)

For the moment, we use a simple user_code directory as repository

## Build a Docker image
A docker image is built from a custom NodeJs-ZetaPush image and the user's source code.

```console
docker build .
Successfully built YOUR_DOCKER_IMAGE_ID
```
Create a docker env file like "docker-run.env"

```
# Your ZetaPush Sandbox Id
sandboxId=XXXXXX
# Your PM2 credentials
pm2Public=XXXXXX
pm2Private=XXXXXX
```


To launch the newly created docker image, just launch
```console
docker container run --env-file docker-run.env -it YOUR_DOCKER_IMAGE_ID
```


## Deployment of the Docker image on a registry
The docker image is deployed on a private registry (or not????)

## Deployment of the Docker image from the registry
The image docker is launched as a service in a Kubernetes cluster

# Steps

## Installing a Kubernetes test cluster

## Create a custom NodeJs image

## Setting up a Docker registry

## Creation of a Scheduler to launch the build

# Questions

* how does ZetaPush visualize that it works?
* How does the developer see it working?
* how do we bill all this?
