const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const envConfig = require('dotenv').config();
const fs = require('fs');
const createConfig = require('./webpack/createConfig');

const ENV = envConfig.parsed;
const mode = 'development'; // development | production
let devtool = 'source-map';
const result = [];

if (mode === 'production') {
  devtool = undefined;
}

if (ENV.CLIENT_SIDE === 'true') {
  const modulesDirPath = `${__dirname}${ENV.PATH_MODULES}`;
  const entry = fs.readdirSync(modulesDirPath).reduce((res, path) => {
    const checkPath = `${modulesDirPath}/${path}`;
    const checkClientPath = `${checkPath}/client.js`;

    if (
      fs.lstatSync(checkPath).isDirectory()
      && fs.existsSync(checkClientPath)
    ) {
      res[path] = checkClientPath;
    }

    return res;
  }, {});

  if (Object.keys(entry).length) {
    result.push(
      createConfig({
        entry,
        output: {
          path: `${__dirname}/dist/client`,
          chunkFilename: '[name].js',
          publicPath: '/',
        },
        mode,
        devtool,
        node: {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
        },
        plugins: [
          new BrowserSyncPlugin({
            proxy: {
              target: 'http://localhost:5000/',
            },
          }),
        ],
      }),
    );
  }
}

if (ENV.SERVER_SIDE === 'true') {
  result.push(
    createConfig({
      entry: {
        index: './src/server/index.js',
      },
      output: {
        path: `${__dirname}/dist/server`,
      },
      mode,
      devtool,
      target: 'node',
      externals: ['uws'],
      stats: {
        warnings: false,
      },
    }),
  );
}

module.exports = result;
