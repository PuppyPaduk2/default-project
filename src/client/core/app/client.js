/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from '.';

export default (content, props = {}) => {
  ReactDOM.hydrate(
    <App {...props}>
      {content && content()}
    </App>,
    document.getElementById('root'),
  );
};
