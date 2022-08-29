FROM node:16.14.2-alpine AS build
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci
COPY public ./public
COPY src ./src
COPY .npmrc astro.config.mjs postcss.config.js tailwind.config.js tsconfig.json ./
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx/default.conf nginx/expires.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
