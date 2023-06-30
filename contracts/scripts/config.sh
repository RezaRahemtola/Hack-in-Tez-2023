#!/bin/bash

export TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER=yes

USERNAME=$1
RPC_URL=$2
PRIVATE_KEY=$(octez-client show address $USERNAME --show-secret | grep "Secret Key: " | awk '{ print $3 }')

octez-client --endpoint $RPC_URL config update
octez-client import secret key $USERNAME $PRIVATE_KEY --force
