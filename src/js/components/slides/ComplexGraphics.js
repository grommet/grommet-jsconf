import React from 'react';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const ComplexGraphics = () => {
  return (
    <Bullets>
      <Bullet item={<strong>Examples:</strong>}>
        <Bullets>
          <Bullet item='Meter' />
          <Bullet item='Chart' />
          <Bullet item='Distribution' />
        </Bullets>
      </Bullet>
      <Bullet item={<strong>Issue:</strong>}>
        <Bullets>
          <Bullet item='As of today (SVG 1.1), there is no graphic role' />
        </Bullets>
      </Bullet>
      <Bullet item={<strong>Solution:</strong>}>
        <Bullets>
          <Bullet item='Use alternative approaches...' />
        </Bullets>
      </Bullet>
    </Bullets>
  );
};

export default ComplexGraphics;
