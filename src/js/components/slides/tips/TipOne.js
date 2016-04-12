import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const TipOne = () => {
  return (
    <div>
      <Bullets>
        <Bullet item="For inline SVG add at least role='img' and title tag" />
        <Bullet item="If your graphic is complex consider adding desc tag">
          <Bullets>
            <Bullet item="Desc is short for description" />
          </Bullets>
        </Bullet>
      </Bullets>
      <Box pad={{vertical: 'large', horizontal: 'small'}}>
        <Heading>
          Now what if we have to provide more dynamic options to
          our icon set?
        </Heading>

        <Bullets>
          <Bullet item="Different sizes (e.g. small, medium, large)" />
          <Bullet item="Different colors (e.g. brand, neutral-1) " />
        </Bullets>
      </Box>
    </div>
  );
};

export default TipOne;
