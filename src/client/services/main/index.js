import React from 'react';
import PropTypes from 'prop-types';
import jss from 'react-jss';

const styles = theme => ({
  ...theme.app(),
  content: {
    backgroundColor: '#000',
    color: 'white',
  },
});

const Content = (props) => {
  const { classes } = props;

  return (
    <div className={classes.content}>
      Main module
    </div>
  );
};

Content.propTypes = {
  classes: PropTypes.object,
};

export default jss(styles)(Content);
