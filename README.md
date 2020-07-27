# Node.js server template

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Style guide](#style-guide)
* [Architecture guide](#architecture-guide)

### General info
This is a simple Node.js server application boilerplate with CRUD operations simple logic. It provides REST APIs. 
Before using it, please ensure that you've already installed the following programs\
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) as version control,\
[Node.js](https://nodejs.org/en/) as server app,\
[Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as Node.js package manager,\
[MongoDb](https://docs.mongodb.com/manual/installation/) as database programs.\
If you haven't, these are their links for installing

### Technologies
Program/lib | version | command for checking\
Git | 2.24.0 | `git --version`\
Node.js | v12.15.0 | `node -v` \
Express | ^4.17.1 | see in this app package.json\
MongoDB | v4.2.1 | `mongo --version`\
Mongoose | ^5.9.4 | see in this app package.json\
Mocha | 7.1.0 | see in this app package.json\
Yarn | 1.22.4 | `yarn -v`

### Setup
1. At first clone this repository\
`git clone https://github.com/Vladinho10/node-server-template.git` 
2. After it you should write your git credentials (if it needs)
3. enter downloaded directory\
`cd node-server-template`
4. create your .env file like .env.simple file

for npm
* install packages\
   `npm i` 
* run server\
   `npm run start`
   or \
   `npm start`
* if you want your server stay always running\
`npm run nodemon`


for yarn
* install packages\
 `yarn`
* run server\
 `yarn run start`
 or\
  `yarn start`
* if you want your server stay always running\
`yarn run nodemon`
or\
 `yarn nodemon` 


## Style guide 
We are inspired from Airbnb eslint configurations. We suggest eslint configs our version, and we'd love to accept
any suggestions about the code style which is in line with our philosophy :) \
It is used only modern and not outdated cases, consequently we've not written less used or not used methods, cases.
For example: it has not written about `const obj = new Object();` because we just use `const obj = {};`\
[more](https://github.com/Vladinho10/node-server-template/blob/master/guides/style-guide.md)

## Architecture guide

The software architecture (SA) is one of the most important parts of the developing. It helps developers easy to integrate into the ocean of the codes.
The architecture describes a set of aspects and decisions of the software. \
[more](https://github.com/Vladinho10/node-server-template/blob/master/guides/architecture-guide.md)
