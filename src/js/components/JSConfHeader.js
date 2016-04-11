import React from 'react';

import Header from 'grommet/components/Header';
import JSConfLogo from './JSConfLogo';

const JSConfHeader = () => {
  return (
    <Header large={true} float={true} fixed={true}
      pad={{horizontal: 'large', vertical: 'medium'}}
      align='center' justify='center'>
      <JSConfLogo />
    </Header>
  );
};

export default JSConfHeader;
