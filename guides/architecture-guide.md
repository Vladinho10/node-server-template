# Architecture Guide

## Introduction

The software architecture (SA) is one of the most important parts of the developing. It helps developers easy to integrate into the ocean of the codes.
The architecture describes a set of aspects and decisions of the software. 
This implies taking into consideration all kinds of requirements (performance, security, etc.), the organization of the system, how the system parts communicate with each other.\
You should think about the long term, building software that is both functional right now and can support any sort of growth and change. \
In other words, the architecture will define the problems you might encounter when it comes to implementation. 
It also shows the organisational structure and makes it much easier to take decisions and manage all sort of change. It also permits us to get a better estimate of the time & costs of a project.

So based on our work experience we decided to have this SA. We'll start from the end because last part is more important to know at first.
We'll speak about every small part of the code in detail even if it seems too primitive and maybe even every beginner knows it.

## Table of Contents

  1. [API docs](#apidocs)
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
  
  
  
## yarn.lock

   If you use `npm` as your package manager, than equivalent to yarn.lock file is `package-lock.json` file.\
   Many developers think that yarn.lock file is unnecessary. ATTENTION ! :loudspeaker: Don't delete or add this file to `.gitignore`. It can bring really serious problems to your application.\
   In order to get consistent installs across machines, Yarn needs more information than the dependencies you configure in your package.json. Yarn needs to store exactly which versions of each dependency has installed.
   To do this Yarn uses a [yarn.lock](https://classic.yarnpkg.com/en/docs/yarn-lock/) file in the root of your project.

**[⬆ back to top](#table-of-contents)**

## README

   README.md file is an optional file. Absence of it doesn't leave a negative influence on your code. Although I strongly recommended you to write and complete your application 'introduction' file. It helps developers and visitors easily to understand what your app/repo is about.
   If you don't know how start to fill your README, or if you get lazy to do it, start from scratch  and write only the most important things at first (say greetings to your visitors, how your app should be used, or how they can run it). When you already have some written some topics then you'll continue fill it again and again ). 
    
**[⬆ back to top](#table-of-contents)**   

## package.json
   
   As we all know the `package.json` is node.js app's backbone. \
   You should take care of it and keep clean. My advice is regularly check your all dependencies, dev-, peer- dependencies and so on. It's a good idea to keep updated your all modules, but you must be careful, your modules' version changes can entail many problems related with your system, node.js and their incompatibility. \
   When you usually install or remove a module, your package manager (yarn or npm) shows you a brief info about your modules (packages) states and statuses. They can be deprecated or can have vulnerabilities, warnings. You can follow yarn/npm advices and fixed them don't forgetting about the incompatibility. \
   You should regularly remove unused unnecessary modules from your app. There are many useful tools for it, e.g. [depcheck](https://github.com/depcheck/depcheck). You can install it globally and use for your all apps. \
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

  This file is use for auto deployment. It's an optional file. I'll add more info about this file after a while.

**[⬆ back to top](#table-of-contents)**  

## index


**[⬆ back to top](#table-of-contents)**  

## .gitignore
  Yeah, you already know that this file is for ignoring directories or files which you don't want to push to your git remote repository. \
  Along with `node_modules` directory we also added a few files/dirs
  * .idea/ (IntelIj files)
  * .DS_Store (Mac OS generating files)
  * uploads/ (folder for uploading files)
  * .env (the project environment file which must be secret files )

**[⬆ back to top](#table-of-contents)**  

## .eslintrc
  

**[⬆ back to top](#table-of-contents)**  

## eslintignore


**[⬆ back to top](#table-of-contents)**  

## env.simple


**[⬆ back to top](#table-of-contents)**  

## .depcheckrc


**[⬆ back to top](#table-of-contents)**  

## views


**[⬆ back to top](#table-of-contents)**  

## tests


**[⬆ back to top](#table-of-contents)**  

## services


**[⬆ back to top](#table-of-contents)**  

## routers


**[⬆ back to top](#table-of-contents)**  

## middlewares


**[⬆ back to top](#table-of-contents)**  

## helpers


**[⬆ back to top](#table-of-contents)**  

## guides


**[⬆ back to top](#table-of-contents)**  

## files


**[⬆ back to top](#table-of-contents)**  

## dal


**[⬆ back to top](#table-of-contents)**  

## controllers


**[⬆ back to top](#table-of-contents)**  

## constants


**[⬆ back to top](#table-of-contents)**  

## configs


**[⬆ back to top](#table-of-contents)**  

## API docs


**[⬆ back to top](#table-of-contents)**  

