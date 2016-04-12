import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

import LinkIcon from 'grommet/components/icons/base/Link';

import Demo from 'grommet-presentation/components/Demo';

import CloseIcon from './CloseIcon';

Box.displayName = 'Box';
CloseIcon.displayName = 'CloseIcon';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <Box direction='row'>
      <CloseIcon />
      <CloseIcon size='large' />
      <CloseIcon size='huge' colorIndex='brand' />
    </Box>
  </Box>
);

const explanation = 'Abstracts the complexities of adding accessibility and dynamic options to icons';

const TipTwo = () => {
  const codepenAnchor = (
    <Anchor href='http://codepen.io/alansouzati/pen/xVYaVw?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );
  return (
    <Demo explanation={explanation} code={code}
      anchor={codepenAnchor} />
  );
};

export default TipTwo;
