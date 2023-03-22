#!/bin/bash

cd packages/lake
yarn unlink
cd ../..

cd packages/shared-business
yarn unlink
cd ../..

cd node_modules/react
yarn unlink
cd ../..

cd node_modules/react-dom
yarn unlink
cd ../..

echo "Don't forget to run `yarn install --force` where the packages are used"
