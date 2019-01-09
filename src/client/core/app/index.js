import React from 'react';
import { ThemeProvider } from 'react-jss';

const app = ({ children, theme }) => {
  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        {children || null}
      </ThemeProvider>
    );
  }

  return children || null;
};

export default app;
