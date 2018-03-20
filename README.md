# Reactjs-seed

This is a basic setup for es6 + react + redux + jest + antd + webpack3 development

Browser & OS Support:

![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/firefox/firefox_48x48.png) | ![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/opera/opera_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |

**Win7+, Mac OS X**

---
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
    |   |   +-- Vendor.jsx //vendor modules
    |   |   +-- Store.jsx //redux store
    |   |   +-- Reducers.jsx //all reducers
    |   |   +-- Routes.jsx //routing file
    |   |   +-- index.jsx // entry for pages
    |   |   +-- Widgets.scss //global css configuration
+-- node_modules
+-- package.json
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


