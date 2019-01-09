import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

/**
 * @param {Function} callback
 */
export default (callback) => {
  const app = express();
  const httpServer = http.Server(app);
  const ENV = dotenv.config().parsed;

  const { port = ENV.PORT } = callback({
    app,
    httpServer,
    ENV,
    express,
  }) || {};

  httpServer.listen(port, () => {
    console.log(`Service up ${port}!`);
  });
};
