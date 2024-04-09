# Stage 1: Build the app
FROM node:16 AS build
WORKDIR /app
COPY package*.json .

RUN npm install 
COPY . .

# Stage 2: Create the production image
FROM node:16-alpine AS production
WORKDIR /app
COPY --from=build /app .
EXPOSE 3000
CMD ["npm", "start"]
