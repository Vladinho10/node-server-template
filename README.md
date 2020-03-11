# Node.js server template

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

### General info
This is a simple Node.js server application with CRUD operations. It provides REST APIs. 
Before using it, please ensure that you've already installed the following programs\
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (as version control)\
[Node.js](https://nodejs.org/en/) (as server app),\
[Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as Node.js package manager\
[MongoDb](https://docs.mongodb.com/manual/installation/) (as database) programs.\
If you haven't, these are their links for installing

### Technologies
Program/lib | version | command for checking\
Git | 2.24.0 | `git --version`\
Node.js | v8.12.0 | `node -v` \
Express | ^4.17.1 | see in this app package.json\
MongoDB | v4.2.1 | `mongo --version`\
Mongoose | ^5.7.13 | see in this app package.json\
Mocha | 6.2.2 | see in this app package.json\
Yarn | 1.19.1 | `yarn -v`

### Setup
1. At first clone this repository\
`git clone https://github.com/Vladinho10/node-server-template.git` 
2. After it you should write your git credentials (if it needs)
3. enter downloaded directory\
`cd node-server-template`
4. create your .env file like .env.example file

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
