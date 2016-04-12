import React from 'react';

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

import TipOne from './slides/tips/TipOne';
import TipTwo from './slides/tips/TipTwo';

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
      <Slide title='Little Game: SVG or PNG?' id='png-or-svg'
        align='center' justify='center'>
        <img src='img/png-vs-svg.gif' className='animated-git'
          title='Two men with a similar horse mask fighting' />
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
    </Slides>
  );
};

export default JSConfSlides;
