#!/bin/bash

cd packages/lake
yarn link
cd ../..

cd packages/shared-business
yarn link
cd ../..

cd node_modules/react
yarn link
cd ../..

cd node_modules/react-dom
yarn link
cd ../..
