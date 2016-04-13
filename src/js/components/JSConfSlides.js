import React from 'react';

import Box from 'grommet/components/Box';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Heading from 'grommet/components/Heading';

import Slides from 'grommet-presentation/components/Slides';
import Slide from 'grommet-presentation/components/Slide';

import Home from './slides/Home';
import WhatIsAccessibility from './slides/WhatIsAccessibility';
import AboutMe from './slides/AboutMe';
import WhyAccessibility from './slides/WhyAccessibility';
import AccessibilityAnalogy from './slides/AccessibilityAnalogy';
import HowToBeAGoodInterpreter from './slides/HowToBeAGoodInterpreter';
import Demo from './slides/Demo';
import WhatIsSvg from './slides/WhatIsSvg';
import CreatingSVG from './slides/CreatingSVG';
import ComplexGraphics from './slides/ComplexGraphics';

import TipOne from './slides/tips/TipOne';
import TipTwo from './slides/tips/TipTwo';
import TipThree from './slides/tips/TipThree';
import TipFour from './slides/tips/TipFour';

import TrickOne from './slides/tricks/TrickOne';

const JSConfSlides = () => {
  return (
    <Slides>
      <Slide id='home' align='center' justify='center' full={true}>
        <Home />
      </Slide>
      <Slide title='About Me' id='about-me'>
        <AboutMe />
      </Slide>
      <Slide id='bay-area-carnival'>
        <Box align='center' justify='center'>
          <img src='img/bay-area-carnival.gif' className='animated-git'
            title='Two geeks dancing in front of a computer' />
        </Box>
      </Slide>
      <Slide title='What is Accessibility?' id='what-is-accessibility'>
        <WhatIsAccessibility />
      </Slide>
      <Slide title='Why Accessibility?' id='why-accessibility'>
        <WhyAccessibility />
      </Slide>
      <Slide title='Accessibility Analogy' id='a11y-analogy'>
        <AccessibilityAnalogy />
      </Slide>
      <Slide title='How to be a good interpreter?' id='good-interpreter'>
        <HowToBeAGoodInterpreter />
      </Slide>
      <Slide id='demo'>
        <Demo />
      </Slide>
      <Slide title='What is SVG?' id='what-is-svg'>
        <WhatIsSvg />
      </Slide>
      <Slide title='Little Game: SVG or PNG?' id='png-or-svg'>
        <Box align='center' justify='center'>
          <img src='img/png-vs-svg.gif' className='animated-git'
            title='Two men with a similar horse mask fighting' />
        </Box>
      </Slide>
      <Slide title='Little Game: SVG or PNG?' id='png-or-svg-game'>
        <Tiles fill={true} align='center' justify='center'>
          <Tile pad='large'>
            <Heading tag='h2' strong={true}>#1</Heading>
            <img src='img/small-logo.png' width='96px' />
            <Heading tag='h3' strong={true}>(12kb)</Heading>
          </Tile>
          <Tile pad='large'>
            <Heading tag='h2' strong={true}>#2</Heading>
            <img src='img/small-logo.svg' width='96px' />
            <Heading tag='h3' strong={true}>(5kb)</Heading>
          </Tile>
        </Tiles>
      </Slide>
      <Slide title='Creating an inline SVG...' id='creating-svg'>
        <CreatingSVG />
      </Slide>
      <Slide title='Tip #1: SVG role and title' id='tip-1'>
        <TipOne />
      </Slide>
      <Slide title='Tip #2: Implement your icon as a React component' id='tip-2'>
        <TipTwo />
      </Slide>
      <Slide title='Tip #3: Create Anchor and Button components that accept icon' id='tip-3'>
        <TipThree />
      </Slide>
      <Slide title='Tip #4: Enable components to have custom a11y titles.' id='tip-4'>
        <TipFour />
      </Slide>
      <Slide title='SVG for complex graphics' id='complex-graphics'>
        <ComplexGraphics />
      </Slide>
      <Slide title='Trick #1: Use tabindex, role img, title and desc' id='trick-1'>
        <TrickOne />
      </Slide>
    </Slides>
  );
};

export default JSConfSlides;
