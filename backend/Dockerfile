# Use the official Node.js v20 image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /app

ENV DATABASE_DBNAME=jobbridge
ENV DATABASE_HOSTNAME=localhost
ENV DATABASE_USERNAME=root
ENV DATABASE_PASSWORD=root

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ]