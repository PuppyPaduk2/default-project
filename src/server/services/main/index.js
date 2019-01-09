import React from 'react';
import { createService } from '../../core';
import clientServer from '../../../client/core/app/server';
import Main from '../../../client/services/main';
import theme from '../../../client/core/themes';

createService(({ app, express, ENV }) => {
  app.use(express.json());
  app.use(express.static(ENV.PATH_STATIC));
  app.get('/favicon.ico', (req, res) => res.sendStatus(404));

  app.get('/main', (req, res) => {
    res.send(clientServer(() => <Main />, {
      modules: ['main'],
    }, { theme }));
  });
});
