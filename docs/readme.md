# Developer Guide

This Web App is designed & developed in [Vuetify](https://vuetifyjs.com/en/) and [Vue.js](https://vuejs.org) using [Vue CLI](https://cli.vuejs.org/guide/).

## Project Structure 
This is the project structure of this Web App
```
project_name
│   README.md
│   package.json    
│   firebase.json
│   babel.config.js
|   package-lock.json
|
└───dist
│   │   favicon.ico
│   │   index.html
|   |   manifest.json
|   |   service-worker.js
|   |   robots.txt
|   |   precache-manifest..file
│   │
│   └──css
│   |   │  ...
|   |   
|   |___js
|   |   |  ...
|   |
│   |___fonts
|   |   |  ...  
|   |
│   |___img
|   |   |___icons
|   |   |    |  ...
|   |   |  ...
|
└───node_modules
|    │ ..
|
|___public
|   |   favicon.ico
|   |   index.html
|   |   manifest.json
|   |   robots.txt
|   |__img
|   |   | ..
|   
|___src
|   |   App.vue
|   |   main.js
|   |   registerServiceWorker.js
|   |   router.js
|   |   style.css
|   |___assets
|   |   |   logo.png
|   |   |   logo.svg
|   |   |
|   |   |___fonts
|   |       | ...
|   |___components     
|   |   |___attending
|   |   |   |   attendingExplore.vue
|   |   |   |   attendingHome.vue
|   |   |
|   |   |___home
|   |   |   |   features-content.vue
|   |   |   |   home-speakers.vue
|   |   |   |   startscreen.vue
|   |   |   |   stats.vue
|   |   |  
|   |   |___bottom-footer.vue
|   |   |___faq.vue
|   |   |___footer.vue
|   |   |___partners.vue    
|   |   
|   |___plugins
|   |   |   vuetifiy.js
|   |   
|   |___views
|   |   |___ agenda.vue
|   |   |___ attending.vue
|   |   |___ home.vue
|   |   |___ speakers.vue
|   |   |___ team.vue
|   |   |


```