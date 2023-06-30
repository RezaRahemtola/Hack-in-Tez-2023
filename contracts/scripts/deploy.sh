#!/bin/bash

USERNAME=$1
ALIAS=$(echo $RANDOM)
CONTRACT=$3
INITIAL_STORAGE=$(cat $4)

octez-client originate contract $ALIAS transferring 0 \
    from $USERNAME running $CONTRACT \
    --init "$INITIAL_STORAGE" \
    --burn-cap 600
