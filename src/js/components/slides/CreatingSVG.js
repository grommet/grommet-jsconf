import React from 'react';

import LiveDemo from 'grommet-presentation/components/LiveDemo';

const code = (
  '<svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px"></svg>'
);

const CreatingSVG = () => {
  return (
    <LiveDemo code={code} />
  );
};

export default CreatingSVG;
