import React from 'react';


import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const WhatIsSvg = () => {
  return (
    <Bullets>
      <Bullet item='Scaled vector graphics' />
      <Bullet item='Common for iconography and graphics' />
      <Bullet item='Why?'>
        <Bullets>
          <Bullet item='Can be easily manipulated' />
          <Bullet item='Has a small footprint' />
        </Bullets>
      </Bullet>
    </Bullets>
  );
};

export default WhatIsSvg;
