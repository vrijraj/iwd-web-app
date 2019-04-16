
# IWD Web App
[![Build Status](https://travis-ci.org/Vrijraj/iwd-web-app.svg?branch=master)](https://travis-ci.org/Vrijraj/iwd-web-app) [![Greenkeeper badge](https://badges.greenkeeper.io/Vrijraj/iwd-web-app.svg)](https://greenkeeper.io/)

<img src="https://raw.githubusercontent.com/GDG-Jalandhar/WebsiteData/master/promotion%20images/iwd%20small.png" width="100%">


Standard Web App for IWD Events: GDG Communties. <br>
[Demo](https://iwd-web-app.firebaseapp.com/) <br>
Version: 1.0.2

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | PWA on Lighthouse |
| **Works offline** | Can works offline |
| **Mobile first** | Mobo Friendly Web app can be installed as a native app on your phone |
| **SEO optimized** | index all content and get to the top in search results |
| **Easy in management** | keep and update all information in the JSON File |


## Getting Started
1. [Fork repository](https://github.com/Vrijraj/iwd-web-app/fork) and clone it locally
1. Install project dependencies: `npm install` 
1. Compiles and hot-reloads for development: `npm run serve`
1. Update [Firebase Web Setup & Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)
1. For the production: `npm run build` and then one dir will be created `dist`
1. For testing: `npm run test`

## Deploy your Web App on Firebase

1. Setup Environment for the Firebase deployment
   * Install Firebase CLI: `npm i -g firebase-tools` or `yarn global add firebase-tools`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `firebase login`
1. Open Terminal/CMD/Powershell in your dir.
1. Now type `firebase login` command in your Terminal/CMD/Powershell. 
1. Type `firebase init`.
1. Select the project by using the arrow keys.
1. Then Select the `Firebase Hosting` by using Spacebar and arrow key.
1. Click `No` for Single page web app.
1. Type `dist`.
1. Some by default file will be created successfully.
1. Run locally
   * `firebase serve` or `npm run serve` or `yarn serve` 
1. Build and deploy
   * `firebase deploy` or `npm run deploy` or `yarn deploy`



### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Technology Stack

* [VueJS](https://vuejs.org/)
* [Vuetify](https://vuetifyjs.com/en/)
* [Firebase](https://firebase.google.com/)
* [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)

### View Website Built with Project 

| Community Name | Web App Link | 
| --- | --- | 
| GDG Jalandhar | [View Now](https://iwd.gdgjalandhar.com) |
| GDG Ahmedabad | [View Now](http://iwd.gdgahmedabad.com) |
| GDG Indore | [View Now](https://iwd.gdgindore.in/) |
 




Project is published under the [MIT license](/LICENSE.md).  
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)

