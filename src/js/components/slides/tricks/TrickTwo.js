import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

import ChartTwo from './ChartTwo';

Box.displayName = 'Box';
Anchor.displayName = 'Anchor';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <ChartTwo />
  </Box>
);

const explanation = 'Must navigate through all the data points even if you are not interested in the graph.';

const TrickThree = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/KzoZXb?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );
  return (
    <Demo explanation={explanation} code={code}
      anchor={codepenAnchor} />
  );
};

export default TrickThree;
