import React from 'react';
import { createService } from '../../core';
import { server as clientServer } from '../../../client/core/app';
import Main from '../../../client/modules/main';

createService(({ app, express, ENV }) => {
  app.use(express.json());
  app.use(express.static(ENV.PATH_STATIC));
  app.get('/favicon.ico', (req, res) => res.sendStatus(404));

  app.get('/', (req, res) => {
    res.send(clientServer(() => <Main />, {
      modules: ['main'],
    }));
  });
});
