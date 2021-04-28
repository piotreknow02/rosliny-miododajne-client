FROM node:latest

RUN mkdir /home/rosliny
WORKDIR /home/rosliny
ADD . /home/rosliny
RUN npm install -g --update npm
RUN npm install -g gatsby-cli
RUN npm install
CMD ["sh", "-c", "gatsby develop"]

# docker build -t rosliny-client .
# docker run -p 3000:3000 rosliny-client