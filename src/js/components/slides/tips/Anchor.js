// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';

const CLASS_ROOT = 'anchor';

const Anchor = (props) => {
  const {a11yTitle, id, icon, href, onClick, target} = props;
  let classes = (
    `${CLASS_ROOT} ${CLASS_ROOT}--icon`
  );

  return (
    <a id={id} className={classes}
      href={href}
      target={target}
      onClick={onClick}
      aria-label={a11yTitle}>
      <span className={`${CLASS_ROOT}__icon`}>{icon}</span>
    </a>
  );
};

Anchor.propTypes = {
  a11yTitle: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string
};

Anchor.displayName = 'Anchor';

export default Anchor;
