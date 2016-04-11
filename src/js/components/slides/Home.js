import React from 'react';

import Box from 'grommet/components/Box';

import Heading from 'grommet-presentation/components/Heading';
import Presenter from 'grommet-presentation/components/Presenter';

const Home = () => {
  return (
    <div>
      <Heading strong={true} align='center'>
        ReactJS: Tips and Tricks to create accessible SVG components
      </Heading>
      <Box pad={{vertical: 'small'}} direction='row' justify='center'
        fill={true} flush={false}>
        <Presenter avatar='https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=120'
          name='Alan Souza' detail='Hewlett Packard Enterprise'
          twitterTag='alansouzati' githubTag='alansouzati' />
      </Box>
    </div>
  );
};

export default Home;
