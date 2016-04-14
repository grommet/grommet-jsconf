import React from 'react';

import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Status from 'grommet/components/icons/Status';

import Code from 'grommet-presentation/components/Code';

const GoodInterpreterAnchor = () => {
  return (
    <div>
      <Paragraph size='large'>Anchor must have href</Paragraph>
      <Box align='start' justify='start'>
        <Box full='horizontal'>
          <Box direction='row' align='center'>
            <Status value='error' />
            <Paragraph size='large'>DON'T</Paragraph>
          </Box>
          <Code>
            {'<a onClick={...} />'}
          </Code>
        </Box>
        <Box full='horizontal'>
          <Box direction='row' align='center'>
            <Status value='ok' />
            <Paragraph size='large'>DO</Paragraph>
          </Box>
          <Code>
            {`function onClick (e) {
  e.preventDefault();
  history.push(href);
}
<a href='/schedule' onClick={onClick} />`}
          </Code>
        </Box>
      </Box>
    </div>
  );
};

export default GoodInterpreterAnchor;
