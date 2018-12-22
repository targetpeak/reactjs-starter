#!/usr/bin/env bash

if [ -z $1 ]; then
    echo "Version should be specified"
    exit 1;
fi

UI_VERSION=$1
declare -r with_build=$2

echo "Going to push image with version ${UI_VERSION}"
if [ -n "$2" ]; then
    echo "Been asked to build image"
    docker build -f Dockerfile -t cms-ui:${UI_VERSION} .
fi

docker tag cms-ui:${UI_VERSION} <repo-name>/cms-ui:${UI_VERSION}
docker tag cms-ui:${UI_VERSION} <repo-name>/cms-ui:latest
docker push <repo-name>/cms-ui:latest
docker push <repo-name>/cms-ui:${UI_VERSION}
