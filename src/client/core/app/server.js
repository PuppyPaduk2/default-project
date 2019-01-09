import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '.';
import html from './html';

/**
 * @param {Function} content
 * @param {Object} [params]
 * @param {String} [params.title]
 * @param {String[]} [params.modules]
 * @param {Object} [props]
 */
export default (content, params = {}, props = {}) => html({
  title: 'Title',
  content: renderToString(
    <App {...props}>
      {!!content && content()}
    </App>,
  ),
  ...params,
});
