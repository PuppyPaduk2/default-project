import React from 'react';
import express from 'express';
import http from 'http';
import { server as clientServer } from '../client/core/app';
import Main from '../client/modules/main';

const PORT = 5000;
const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.static('dist/client'));
app.get('/favicon.ico', (req, res) => res.sendStatus(404));
app.get('/', (req, res) => {
  res.send(clientServer(() => <Main />, {
    modules: ['main'],
  }));
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
