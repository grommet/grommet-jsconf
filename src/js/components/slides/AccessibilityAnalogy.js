import React from 'react';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';
import Quote from 'grommet-presentation/components/Quote';

const AccessibilityAnalogy = () => {
  return (
    <div>
      <Bullets>
        <Bullet item='Interpreter is available'>
          <Bullets>
            <Bullet item='equals access regardless of language limitation' />
          </Bullets>
        </Bullet>
        <Bullet item='How do I feel?'>
          <Bullets>
            <Bullet item='Respected' />
            <Bullet item='Someone cares about me' />
            <Bullet item='Got my job done' />
          </Bullets>
        </Bullet>
      </Bullets>
      <Quote author='Me'>
        As developers we need to play the interpreter role more.
      </Quote>
    </div>
  );
};

export default AccessibilityAnalogy;
