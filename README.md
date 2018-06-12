# Reactjs-seed

This is a full setup for es6 + react + redux + flow + jest + antd + webpack4 development

Browser & OS Support:

![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/firefox/firefox_48x48.png) | ![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/opera/opera_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |
---
## Introduction
Ready for production setup for react development. Here are some highlights:
1. Latest stable dependencies
2. Fully optimized production build with gzip, uglyfy and tree shaking
3. Application served with Nginx docker container

## Project Structure

```
+-- README.md
+-- app-build
+-- webpack-config  // webpack configuration
+-- src
    |   |   +-- assets
    |   |   |   +-- fonts
    |   |   |   +-- i18n
    |   |   |   +-- images
    |   |   +-- Welcome //feature dir
    |   |   +-- index.html // entry html file
    |   |   +-- App.jsx // all components
    |   |   +-- Store.jsx //redux store
    |   |   +-- Reducers.jsx //all reducers
    |   |   +-- Routes.jsx //routing file
    |   |   +-- index.jsx // entry for pages
    |   |   +-- Widgets.scss //global css configuration
+-- node_modules
+-- package.json
+-- Dockerfile
```

## Quick Start

- Under `reactjs-seed`, do `npm install`
- Enter `npm run start` and open your browser enter `localhost:4000`

## Dev Guidelines

### Commands
- `npm run clean` delete the the current build
- `npm run lint` syntax check for entire project
- `npm run build` package the project
- `npm run server` start localhost
- `npm run production` make production build
- `npm run start` equals to `npm run build` and `npm run server`

## Deployment
- `npm run production && docker build .` build image
- `docker run -d -p 80:80 [IMAGE_ID]` run container
pages should be ready on `http://localhost`

## React Lifecycle
![alt text](https://cdn-images-1.medium.com/max/800/0*OoDfQ7pzAqg6yETH.)

## Style Guide
https://github.com/airbnb/javascript


