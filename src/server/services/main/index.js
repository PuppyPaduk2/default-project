import React from 'react';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { server as clientServer } from '../../../client/core/app';
import Main from '../../../client/modules/main';

const app = express();
const httpServer = http.Server(app);
const ENV = dotenv.config().parsed;

app.use(express.json());
app.use(express.static(ENV.PATH_STATIC));
app.get('/favicon.ico', (req, res) => res.sendStatus(404));

app.get('/', (req, res) => {
  res.send(clientServer(() => <Main />, {
    modules: ['main'],
  }));
});

httpServer.listen(ENV.PORT, () => {
  console.log(`Example app listening on port ${ENV.PORT}!`);
});
