#!/bin/bash

# Install dependencies
npm install

# Build the Angular app
npx ng build --configuration=production

echo "Build completed. Files are in dist/balance-ayurveda/"