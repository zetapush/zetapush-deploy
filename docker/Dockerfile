FROM keymetrics/pm2:latest-alpine

# Create app directory
WORKDIR /usr/src/app

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
