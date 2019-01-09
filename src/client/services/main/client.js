import React from 'react';
import client from '../../core/app/client';
import Main from './index';
import theme from '../../core/themes';

export default client(() => (
  <Main />
), { theme });
