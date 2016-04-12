import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

const WhyAccessibility = () => {
  return (
    <div>
      <Bullets>
        <Bullet item="One billion people, or 15 % of the world’s population, experience some form of disability [1]" />
        <Bullet item="US elderly population (age 65+) grew faster than any other segment of the population during the 20th century. [2]" />
        <Bullet item='As much as ~8% of the population is color blind [3]' />
        <Bullet item='People with disability (blind, low-vision, color blind, many more) DO use technology' />
      </Bullets>
      <Footer direction='column' pad={{vertical: 'large'}}>
        <Box separator='top'>
          <span>
            [1] - <Anchor href='http://www.worldbank.org/en/topic/disability/overview'
              target='_blank' label='World Bank Disability' />
          </span>
          <span>
            [2] - <Anchor href='https://www.asid.org/content/aging-accessibility#.Vwsm3RMrKqA'
              target='_blank' label='Aging & Accessibility' />
          </span>
          <span>
            [3] - <Anchor href='https://nei.nih.gov/health/color_blindness/facts_about'
              target='_blank' label='Color Blindness' />
          </span>
        </Box>
      </Footer>
    </div>
  );
};

export default WhyAccessibility;
