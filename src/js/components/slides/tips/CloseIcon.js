// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const CLASS_ROOT = 'control-icon';

export default class Icon extends Component {
  render () {
    const { className, colorIndex, large } = this.props;
    let { a11yTitle, size } = this.props;

    if (!size && large) {
      size = 'large';
    }

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-close`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`color-index-${colorIndex}`]: colorIndex
      }
    );

    return <svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes}><title>{a11yTitle}</title><g id="close"><rect id="_x2E_svg" x="0" y="0" fill="none" width="24" height="24"/><path fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" d="M3,21L21,3 M3,3l18,18"/></g></svg>;
  }
};

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge'])
};

Icon.defaultProps = {
  a11yTitle: 'Close'
};

Icon.icon = true;

Icon.displayName = 'CloseIcon';
