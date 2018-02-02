FROM keymetrics/pm2:latest-alpine

# Create app directory
RUN mkdir -p /usr/src/app
RUN chown node:node /usr/src/app
WORKDIR /usr/src/app
USER node

# Install shell dependencies
COPY package.json .
COPY shell.js .
RUN npm install --quiet --production --no-progress

# Bundle app source
RUN mkdir -p user_code
COPY user_code /usr/src/app/user_code/

WORKDIR /usr/src/app/user_code
# Install npm dependencies
RUN npm install --quiet --production --no-progress

CMD [ "npm", "start" ]
