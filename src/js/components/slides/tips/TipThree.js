import React from 'react';

import Box from 'grommet/components/Box';
import GrommetAnchor from 'grommet/components/Anchor';
import LinkIcon from 'grommet/components/icons/base/Link';

Box.displayName = 'Box';

import CloseIcon from './CloseIcon';
import Anchor from './Anchor';
import Button from './Button';

import Demo from 'grommet-presentation/components/Demo';

const code = (
  <Box pad={{vertical: 'medium'}} align='center'>
    <Box pad='small' direction='row'>
      <Anchor href='http://www.grommet.io/docs/develop/icon'
        target='_blank' icon={<CloseIcon size='large' />} />

      <Button icon={<CloseIcon size='large' />} />
    </Box>
  </Box>
);

const explanation = 'Screen readers understand Anchors and Buttons without the need to specify roles.';

const TipThree = () => {
  const codepenAnchor = (
    <GrommetAnchor href='http://codepen.io/alansouzati/pen/pyLJeg?editors=0010'
      target='_blank' label='CodePen' icon={<LinkIcon />}
      a11yTitle='See in CodePen' />
  );

  return (
    <Demo explanation={explanation} code={code} anchor={codepenAnchor} />
  );
};

export default TipThree;
