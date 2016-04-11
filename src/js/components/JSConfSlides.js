import React from 'react';

import Slides from 'grommet-presentation/components/Slides';
import Slide from 'grommet-presentation/components/Slide';

import Home from './slides/Home';
import WhatIsAccessibility from './slides/WhatIsAccessibility';
import AboutMe from './slides/AboutMe';
import WhyAccessibility from './slides/WhyAccessibility';

const JSConfSlides = () => {
  return (
    <Slides>
      <Slide id='home' align='center' justify='center'>
        <Home />
      </Slide>
      <Slide title='About Me' id='about-me'>
        <AboutMe />
      </Slide>
      <Slide id='bay-area-carnival' align='center' justify='center'>
        <img src='img/bay-area-carnival.gif' className='animated-git'
          title='Two geeks dancing in front of a computer' />
      </Slide>
      <Slide title='What is Accessibility?' id='what-is-accessibility'>
        <WhatIsAccessibility />
      </Slide>
      <Slide title='Why Accessibility?' id='why-accessibility'>
        <WhyAccessibility />
      </Slide>
    </Slides>
  );
};

export default JSConfSlides;
