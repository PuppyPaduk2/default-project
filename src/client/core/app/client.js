/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default (content) => {
  ReactDOM.hydrate(
    <App>{content && content()}</App>,
    document.getElementById('root'),
  );
};
