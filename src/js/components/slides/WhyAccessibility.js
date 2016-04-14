import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';


import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const WhyAccessibility = () => {

  const firstBullet = (
    <span>
      One billion people, or <strong>15%</strong> of the world’s population, experience some form of disability [1]
    </span>
  );

  const secondBullet = (
    <span>
      People with disabilities <strong>DO</strong> use technology
    </span>
  );
  return (
    <div>
      <Bullets>
        <Bullet item={firstBullet}>
          <Bullets>
            <Bullet item='~8% of the population is color blind [2]' />
          </Bullets>
        </Bullet>
        <Bullet item={secondBullet} />
      </Bullets>
      <Footer direction='column' pad={{vertical: 'large'}}>
        <Box separator='top'>
          <span>
            [1] - <Anchor href='http://www.worldbank.org/en/topic/disability/overview'
              target='_blank' label='World Bank Disability' />
          </span>
          <span>
            [2] - <Anchor href='https://nei.nih.gov/health/color_blindness/facts_about'
              target='_blank' label='Color Blindness' />
          </span>
        </Box>
      </Footer>
    </div>
  );
};

export default WhyAccessibility;
