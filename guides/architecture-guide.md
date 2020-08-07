# Architecture Guide

## Introduction

In other words, the SA defines the problems you might encounter when it comes to implementation. 
It also shows the organisational structure and makes it much easier to take decisions and manage all sort of change. It also permits us to get a better estimate of the time & costs of a project.

So based on our work experience we decided to have this SA. We'll start from the end because last part is more important to know at first.
We'll speak about every small part of the code in detail even if it seems too primitive and maybe even every beginner knows it.

## Table of Contents

  1. [API docs](#api_docs)
  1. [configs](#configs)
  1. [constants](#constants)
  1. [controllers](#controllers)
  1. [dal](#dal)
  1. [files](#files)
  1. [guides](#guides)
  1. [helpers](#helpers)
  1. [middlewares](#middlewares)
  1. [routers](#routers)
  1. [services](#services)
  1. [tests](#tests)
  1. [views](#views)
  1. [.depcheckrc](#depcheckrc)
  1. [env.simple](#envsimple)
  1. [.eslintignore](#eslintignore)
  1. [.eslintrc](#eslintrc)
  1. [.gitignore](#.gitignore)
  1. [index](#index)
  1. [jenkinsfile](#jenkinsfile)
  1. [loggerConfig](#loggerconfig)
  1. [package.json](#packagejson)
  1. [README.md](#README)
  1. [yarn.lock](#yarnlock)
  
  
## Foreword

   I'd like to start from naming of files or directories.
   1. All files or directories are started with lowercase. E.g. `configs`, `index.js`
   2. Complex words are written with dash. E.g. `admin-panel-ctrl`
   3. All directories are written with plural form. Exception is `dal` (data access layer), but in that dir again all subdirectories are in plural form.

   In our software structure we use barrel export. A barrel is a way to rollup exports from several modules into a single convenient module. The barrel itself is a module file that re-exports selected exports of other modules. \
   Putting those words in action, is creating an index.js file to reexport everything the end user will need:
   ```
   const objects = require('./objects');
   const strings = require('./strings');
   const general = require('./general');
   
   module.exports = {
       objects,
       strings,
       general,
   };
  ```
  Express framework v4.x doesn't use async/await functions, so we asyncified all we need (it is shown in `controllers` section). 
  

## yarn.lock

   If you use `npm` as your package manager, then equivalent to yarn.lock file is `package-lock.json` file.\
   Many developers think that yarn.lock file is unnecessary. ATTENTION ! :loudspeaker: Don't delete or add this file to `.gitignore`. It can bring really serious problems to your application.\
   In order to get consistent installs across machines, Yarn needs more information than the dependencies you configure in your package.json. Yarn needs to store exactly which versions of each dependency has installed.
   To do this Yarn uses a [yarn.lock](https://classic.yarnpkg.com/en/docs/yarn-lock/) file in the root of your project.

**[⬆ back to top](#table-of-contents)**

## README

   README.md file is an optional file. Absence of it doesn't leave a negative influence on your code. Although I strongly recommended you to write and complete your application 'introduction' file. It helps developers and visitors easily to understand what your app/repo is about.
   If you don't know how start filling your README, start from a scratch and write only the most important things at first (say greetings to your visitors, how your app should be used, or how they can run it). When you already have some written some topics then you'll continue fill it again and again ). 
    
**[⬆ back to top](#table-of-contents)**   

## package.json
   
   As we all know the `package.json` is node.js app's backbone. \
   You should take care of it and keep clean. My advice is regularly check all of your dependencies, dev-, peer- dependencies and so on. It's a good idea to keep updated your all modules, but you must be careful, your modules' version changes can result in many problems related with your system, node.js and their incompatibility. \
   When you usually install or remove a module, your package manager (yarn or npm) shows you a brief info about your modules (packages) states and statuses. They can be deprecated or can have vulnerabilities, warnings. You can follow yarn/npm advices and fix them without forgetting about the incompatibilities. \
   You should regularly remove unused, unnecessary modules from your app. There are many useful tools for it, e.g. [depcheck](https://github.com/depcheck/depcheck). You can install it globally and use for your all apps. \
   In package.json you can add scripts for running, debugging, testing and so on.

**[⬆ back to top](#table-of-contents)**  

## loggerConfig

   loggerConfig.js file is [log4js](https://log4js-node.github.io/log4js-node/) config file. Log4js gives a wide range of opportunities for logging. Using it is an optional. I just added it for syntax sugar. 
   With log4js you can change your code log style, colors, add more info in logging. In this config file you can add your specific logging layout or use already exists patterns. For more info please see my loggerConfig.js file. \
   Usage. You should just require your config file in your app. (e.g. in your root index file or in your main config file as I did). After it when you need to use log4js logging, do this steps \
   1. require the module and use `getLogger` method giving to it your file name/descriptor in which you use it. \
   `const logger = require('log4js').getLogger('ENTRY.index');`
   2. use one of the logging methods (e.g. info, error, log, warn) \
   ``logger.info(`app listen ${port} port`)``
     
**[⬆ back to top](#table-of-contents)**  

## jenkinsfile

  This file is used for auto deployment. It's an optional file. I'll add more info about this file later.

**[⬆ back to top](#table-of-contents)**  

## index

  This is the entry point of your app. This is a cell from which your application's civilization is originated . For running it, Node.js runs `index.js` at first. It initializes all classes and methods\
  Here you should write as less code as possible. It should be a very simple and clean. Usually you create the server with a port and give connection to your database. You can also add here your routers and middlewares.  

**[⬆ back to top](#table-of-contents)**  

## .gitignore

  Yeah, you already know that this file is for ignoring directories or files which you don't want to push to your git remote repository. \
  Along with `node_modules` directory we also added a few files/dirs
  * .idea/ (IntelliJ files)
  * .DS_Store (Mac OS generating files)
  * uploads/ (folder for uploading files)
  * .env (the project environment file which must be secret files )

**[⬆ back to top](#table-of-contents)**  

## .eslintrc

  ESLint is a static code analysis tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
  This is its config file. Our `.eslintrc` and style guide are being written according best practices of JS, Node.js (e.g. the great software development school of Airbnb), and, of course, our best modest experience :innocent: It was tested line by line. For more info please take a look our style guide.
  
**[⬆ back to top](#table-of-contents)**  

## eslintignore

  This file is for ignoring any file or directory which you don't prefer to be checked by Eslint. It's an optional file.

**[⬆ back to top](#table-of-contents)**  

## env.simple

  This file is a simple example of your real .env file. In that you should write your .environment variables, secret keys and passwords.\
  For using .env file. you must install `dotenv` module via npm and just require it in your config file. This module will use your .env file data when your app run.
  Keep your `.env` file secure.

**[⬆ back to top](#table-of-contents)**  

## .depcheckrc

  This is an optional. As we said above, there is a module, which helps to check which dependency is unused in package.json.\
  Sometimes there are modules or directory you don't want to be checked. So this file is for ignoring them.
  
**[⬆ back to top](#table-of-contents)**  

## views

  This directory is used to save template engines. A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.\
  You may not have view engine. We decided to add it just for example. We use `EJS`. You can use any engine you prefer. After it you need to set 2 things: the view engine and the directory for it (by default express use `views` dir). In our case we set them in entry `index.js` file.   

**[⬆ back to top](#table-of-contents)**  

## tests

  Tests are one of most important part of your code. Yes you can live without them, but life gets better and secure with them. We decided to use `Mocha` test framework with `Sinon` and `Chai`.
  Your app should have 2 types of tests integration and unit. As we know with unit tests you test your individual parts of source code, individual methods. With integration tests you test a group of unit tests or specific flow of the code, e. g. working capacity from controllers to database actions. 
  In our template we wrote some tests examples.

**[⬆ back to top](#table-of-contents)**  

## services
  Services are conceptual parts of app architecture. 
  <img src="../files/media/c-s-d.png" width="210" height="193"  alt="c-s-d relation" align="right"/>


**[⬆ back to top](#table-of-contents)**  

## routers

   A router is a method which forwards controllers (and middlewares) to the appropriate endpoint (route, path, url) and the appropriate http method.
  
  `const userRt = require('express').Router();`  // create a router for `users` resource
  `const { UserCtrl } = require('../controllers');` // import `users` resource's controller

  `userRt.post('/v1/users', UserCtrl.post);` // for post request on `/v1/users` endpoint works UserCtrl's post method
  `userRt.get('/v1/users/:_id', UserCtrl.getOne);` // for get request on `/v1/users/:_id` endpoint works UserCtrl's getOne method
  
  Routers directory's index.js file considers 3 parts.
  1. Middlewares
  1. Controllers
  1. ErrorHandler 
  
  At first, we run  indexRouter's use method (which is a middleware too) which accepts combined middlewares group, then the router accepts controllers group by file name order and at last it accepts ErrorHandler middleware. \
  It should be noted that ErrorHandler accepts 4 arguments: `err, req, res, next`, but the last one is not used. If we don't put the 4th argument, Express will not understand the 1st argument as `err`, it will understand as `req`.

**[⬆ back to top](#table-of-contents)**  

## middlewares

  Middleware functions are functions that have access to the request object `(req)`, the response object `(res)`, and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.
  We already talked about ErrorHandler middleware. Besides, it there are 2 ones: `respond.js` and `upload.js`.\
  With `respond` you can send response to client and send appropriate status code according [http-status](https://www.npmjs.com/package/http-status) npm module.\
  E.g. when you what to send <span style="color:green;">status code 200,</span> you can use 
  ```
  res.ok(data)
  ``` 
  method instead 
  ```
  res.status(200).send(data)
  ``` 
  or if you want to send <span style="color:red;">error 404</span> you should use `res.notFound()` instead of `res.status(404).send(data)`.\
  With upload middlware you can upload file to server. In our case we have `uploads` directory for uploading file. But you can't see it because we've added it in `.gitignore`.
  In middlewares you can add authentication logic. In which route it is used, the user must be authorized.

**[⬆ back to top](#table-of-contents)**  

## helpers

   This is the place, where you can save reusable methods for different and recurring situations. Why? It's easy to reach to different data, when you already know where is it. Then it's comfortable use from one place and when you change some values it will change everywhere which has the reference to it.
   We separate helpers by data types' methods or for specific cases.

**[⬆ back to top](#table-of-contents)**  

## guides

  This directory is intended to store guidelines related the project. In our case we have 2 of them.
  1. style guide (about syntax, semantics, manuscript of the code)
  1. architecture guide (current file)
  
**[⬆ back to top](#table-of-contents)**  

## files

  The `files` directory stores files related your template engine (.css, .js) or your media files and documents.

**[⬆ back to top](#table-of-contents)**  

## dal

  dal - data access layer.

**[⬆ back to top](#table-of-contents)**  

## controllers

  <img src="../files/media/app-architecture.png"  alt="app-architecture"/>


**[⬆ back to top](#table-of-contents)**  

## constants

  Like `helpers`, these are meant to store global and local constants and enums.
  We separate constants by specific spheres and again use barrel export.
  
**[⬆ back to top](#table-of-contents)**  

## configs


**[⬆ back to top](#table-of-contents)**  

## API_docs


**[⬆ back to top](#table-of-contents)**  

