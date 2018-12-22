import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import html from './html';

/**
 * @param {Function} content
 * @param {Object} [params]
 * @param {String} [params.title]
 * @param {String[]} [params.modules]
 */
export default (content, params = {}) => html({
  title: 'test-pixi',
  content: renderToString(<App>{!!content && content()}</App>),
  ...params,
});
