FROM node:12

# Create app directory
WORKDIR /usr/src/node-server-template

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ../package.json ./
COPY ../yarn.lock ./

ENV DB_HOST=mongodb://mongo-container

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY .. .

EXPOSE 8080
CMD [ "node", "index.js" ]
