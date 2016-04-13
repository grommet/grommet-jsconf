import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

import ChartOne from './ChartOne';

Box.displayName = 'Box';
Anchor.displayName = 'Anchor';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <ChartOne />
  </Box>
);

const explanation = 'Better than nothing but does not scale well. Reads too much content.';

const TrickOne = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/aNYvoj?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );
  return (
    <Demo explanation={explanation} code={code}
      anchor={codepenAnchor} />
  );
};

export default TrickOne;
