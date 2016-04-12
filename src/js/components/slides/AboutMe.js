import React from 'react';

import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import GrommetLogo from 'grommet/components/icons/Grommet';

import Bullet from 'grommet-presentation/components/Bullet';
import Bullets from 'grommet-presentation/components/Bullets';

import AlanAvatar from '../AlanAvatar';
import HPELogo from '../HPELogo';

const AboutMe = () => {
  return (
    <Tiles fill={true}>
      <Tile>
        <Bullets>
          <Bullet item='100% allocated on Grommet'>
            <Bullets>
              <Bullet item='An accessible open-source UX framework for enterprise apps' />
            </Bullets>
          </Bullet>
          <Bullet item='Brazilian currently living in California' />
          <Bullet item='Amateur Accordionist' />
          <Bullet item='Likes samba, forró, bossa nova, and CARNIVAL' />
        </Bullets>
      </Tile>
      <Tile justify='center'>
        <Box direction='row'>
          <Box pad='small'>
            <HPELogo />
          </Box>
          <Box pad='small'>
            <GrommetLogo size='large' />
          </Box>
        </Box>
        <Box pad='small'>
          <AlanAvatar />
        </Box>
      </Tile>
    </Tiles>
  );
};

export default AboutMe;
