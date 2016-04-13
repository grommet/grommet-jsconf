// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';

const CLASS_ROOT = 'button';

const Button = (props) => {
  const {a11yTitle, icon, id, onClick, type } = props;
  let classes = (
    `${CLASS_ROOT} ${CLASS_ROOT}--plain ${CLASS_ROOT}--icon`
  );

  return (
    <button id={id} type={type}
      className={classes} aria-label={a11yTitle}
      onClick={onClick}>
      <span className={`${CLASS_ROOT}__icon`}>{icon}</span>
    </button>
  );
};

Button.propTypes = {
  a11yTitle: PropTypes.string,
  icon: PropTypes.element.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  type: 'button'
};

Button.displayName = 'Button';

export default Button;
