import React from 'react';

import Box from 'grommet/components/Box';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';
import Quote from 'grommet-presentation/components/Quote';

const WhatIsAccessibility = () => {
  return (
    <div>
      <Bullets>
        <Bullet item='Provide equal access to products, devices, and services' />
        <Bullet item='Digital Accessibility'>
          <Bullets>
            <Bullet item='User with disabilities to have access to internet, software, mobile devices...' />
          </Bullets>
        </Bullet>
        <Bullet item='Usability' />
      </Bullets>

      <Box pad={{horizontal: 'small'}}>
        <Quote author='Tim Berners-Lee' detail='Creator of World Wide Web'>
          The power of the Web is in its universality.
          Access by everyone regardless of disability is an essential aspect.
        </Quote>
      </Box>
    </div>
  );
};

export default WhatIsAccessibility;
