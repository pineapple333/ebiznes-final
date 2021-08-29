FROM alpine:latest
RUN apk add --no-cache nodejs npm

COPY . .

EXPOSE 5000

RUN npm install
RUN npm install -g serve
RUN npm run-script build

ENTRYPOINT serve -s build