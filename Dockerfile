# Copyright 2016, EMC, Inc.

FROM rackhd/on-core

COPY . /RackHD/on-wss/
WORKDIR /RackHD/on-wss

RUN mkdir -p ./node_modules \
  && ln -s /RackHD/on-core ./node_modules/on-core \
  && npm install --ignore-scripts --production

EXPOSE 9100
CMD [ "node", "/RackHD/on-wss/index.js" ]
