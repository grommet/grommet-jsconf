import React from 'react';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const ComplexGraphics = () => {
  return (
    <Bullets>
      <Bullet item='Meter' />
      <Bullet item='Chart' />
      <Bullet item='Distribution' />
      <Bullet item='Issue'>
        <Bullets>
          <Bullet item='As of today (SVG 1.1), there is no graphic role' />
        </Bullets>
      </Bullet>
      <Bullet item='Use a simple Chart to describe different alternatives (tricks)' />
    </Bullets>
  );
};

export default ComplexGraphics;
