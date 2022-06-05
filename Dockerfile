FROM node:latest

RUN mkdir /home/rosliny
WORKDIR /home/rosliny
ADD . /home/rosliny
RUN npm install -g --update npm
RUN npm install -g gatsby-cli
RUN npm install
RUN python3 gallery.py
RUN gatsby build
CMD ["gatsby", "serve", "--port", "8888"]

# docker build -t rosliny-client .
# docker run -p 8888:8888 rosliny-client