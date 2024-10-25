#!/bin/bash

cd packages/lake
pnpm link
cd ../..

cd packages/shared-business
pnpm link
cd ../..

cd node_modules/react
pnpm link
cd ../..

cd node_modules/react-dom
pnpm link
cd ../..
