import React from 'react';

import Anchor from 'grommet/components/Anchor';

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
      <Bullet item='Understand and follow WCAG guidelines'>
        <Bullets>
          <Anchor href='https://www.w3.org/TR/WCAG20/' target='_blank'>
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
    </Bullets>
  );
};

export default HowToBeAGoodInterpreter;
