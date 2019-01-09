const fullSize = {
  width: '100%',
  height: '100%',
};
const patterns = {
  fullSize,
};
const app = () => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
    },
    'html, body, #root': { ...fullSize },
  },
});

const defaultTheme = {
  app,
  patterns,
};

export default defaultTheme;
