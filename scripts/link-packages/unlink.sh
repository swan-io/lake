#!/bin/bash

cd packages/lake
pnpm unlink
cd ../..

cd packages/shared-business
pnpm unlink
cd ../..

cd node_modules/react
pnpm unlink
cd ../..

cd node_modules/react-dom
pnpm unlink
cd ../..
