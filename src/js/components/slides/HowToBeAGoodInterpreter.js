import React from 'react';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const HowToBeAGoodInterpreter = () => {
  return (
    <Bullets>
      <Bullet item="Are you following HTML specs?">
        <Bullets>
          <Bullet item='Anchor must have href' />
          <Bullet item='Paragraph is not an Anchor' />
          <Bullet item='Custom components must have roles (e.g. menu)' />
          <Bullet item='much more...' />
        </Bullets>
      </Bullet>
      <Bullet item='Choose colors that have good contrast ratio' />
      <Bullet item='Test keyboard operability' />
      <Bullet item='Test screen readers'>
        <Bullets>
          <Bullet item='Use aria to help' />
        </Bullets>
      </Bullet>
    </Bullets>
  );
};

export default HowToBeAGoodInterpreter;
