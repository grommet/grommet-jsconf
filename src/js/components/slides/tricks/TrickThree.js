import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

import ChartThree from './ChartThree';

Box.displayName = 'Box';
Anchor.displayName = 'Anchor';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <ChartThree />
  </Box>
);

const explanation = "Keep focus on the SVG root and navigate using arrow keys.";

const TrickThree = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/greoEz?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );
  return (
    <Demo explanation={explanation} code={code}
      anchor={codepenAnchor} />
  );
};

export default TrickThree;
