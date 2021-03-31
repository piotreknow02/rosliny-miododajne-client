FROM alpine:latest

RUN apk add --update nodejs npm
RUN mkdir /home/rosliny
WORKDIR /home/rosliny
ADD . /home/rosliny
RUN npm install
CMD ["sh", "-c", "npm run dev-r"]

# docker build -t rosliny-client .
# docker run -p 3000:3000 rosliny-client