import React from 'react';

import Anchor from 'grommet/components/Anchor';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const HowToBeAGoodInterpreter = () => {
  return (
    <Bullets>
      <Bullet item='Understand and follow WCAG'>
        <Bullets>
          <Anchor href='http://www.w3.org/WAI/WCAG20/glance/' target='_blank'>
            Web Content Accessibility Guidelines
          </Anchor>
        </Bullets>
      </Bullet>
      <Bullet item='Choose colors that have good contrast ratio' />
      <Bullet item='Test keyboard operability' />
      <Bullet item='Test screen readers'>
        <Bullets>
          <Bullet item='Use aria to help' />
        </Bullets>
      </Bullet>
      <Bullet item="Are you following HTML specs?" />
    </Bullets>
  );
};

export default HowToBeAGoodInterpreter;
