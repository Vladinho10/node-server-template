# Architecture Guide

The software architecture (SA) is one of the most important parts of the developing. It helps developers easy to integrate into the ocean of the codes.
The architecture describes a set of aspects and decisions of the software. 
This implies taking into consideration all kinds of requirements (performance, security, etc.), the organization of the system, how the system parts communicate with each other.\
You should think about the long term, building software that is both functional right now and can support any sort of growth and change. \
In other words, the architecture will define the problems you might encounter when it comes to implementation. 
It also shows the organisational structure and makes it much easier to take decisions and manage all sort of change. It also permits us to get a better estimate of the time & costs of a project.

So based on our work experience we decided to have this SA. We'll start from the end because last part is more important to know at first.

## Table of Contents

  1. [API docs](#api-docs)
  1. [configs](#configs)
  1. [constants](#constants)
  1. [controllers](#controllers)
  1. [dal](#dal)
  1. [files](#files)
  1. [guides](#guides)
  1. [helpers](#helpers)
  1. [middlwares](#middlwares)
  1. [routes](#routes)
  1. [services](#services)
  1. [tests](#tests)
  1. [views](#views)
  1. [env.simple](#env.simple)
  1. [.eslintignore](#.eslintignore)
  1. [.eslintrc](#.eslintrc)
  1. [.gitignore](#.gitignore)
  1. [index](#index)
  1. [jenkinsfile](#jenkinsfile)
  1. [loggerConfig](#loggerConfig)
  1. [package.json](#package.json)
  1. [README.md](#README)
  1. [yarn.lock](#yarn-lock)
  
  
## yarn lock

   If you use `npm` as your package manager, than equivalent to yarn.lock file is `package-lock.json` file.
   Many developers think that yarn.lock file is unnecessary. ATTENTION ! :loudspeaker: Don't delete or add this file to `.gitignore` this file. It can bring really serious problems to your application.\
   In order to get consistent installs across machines, Yarn needs more information than the dependencies you configure in your package.json. Yarn needs to store exactly which versions of each dependency were installed.
   To do this Yarn uses a [yarn.lock](https://classic.yarnpkg.com/en/docs/yarn-lock/) file in the root of your project.

**[⬆ back to top](#table-of-contents)**

## README


