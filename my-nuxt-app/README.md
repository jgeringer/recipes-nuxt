# my-nuxt-app

> My best Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## Builds:
```
Deploying a Universal App
So you want to deploy a Universal app - here's how it works:

First of all, you need to build the app, just as shown in the previous lecture: npm run build 

Thereafter, you can simply upload your entire project folder (including the .nuxt/  folder and the node_modules  folder as well as the package.json  and nuxt.config.js  files) to your web server.

Important: This web server has to run Node.js version 8.x or higher!

You can choose any hosting provider you want - such as Heroku, AWS (EC2 or Elastic Beanstalk) etc.

Depending on the provider, you might not need to upload the node_modules  folder because the npm install  command will be run automatically. It doesn't hurt to also ship the node_modules  folder though (except for the increased upload file size).

Make sure that the npm start  command gets executed on your chosen hosting platform - for most providers, this should be the default. npm start  will start the Node server provided and configured by Nuxt.js and will basically enable the server-side rendering of Vue apps.

And that's already all that's to it!
```

###
