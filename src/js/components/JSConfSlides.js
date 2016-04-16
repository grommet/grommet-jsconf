import React from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import Slides from 'grommet-presentation/components/Slides';
import Slide from 'grommet-presentation/components/Slide';

import Home from './slides/Home';
import WhatIsAccessibility from './slides/WhatIsAccessibility';
import AboutMe from './slides/AboutMe';
import WhyAccessibility from './slides/WhyAccessibility';
import AccessibilityAnalogy from './slides/AccessibilityAnalogy';
import HowToBeAGoodInterpreter from './slides/HowToBeAGoodInterpreter';
import GoodInterpreterAnchor from './slides/GoodInterpreterAnchor';
import GoodInterpreterParagraph from './slides/GoodInterpreterParagraph';
import Demo from './slides/Demo';
import WhatIsSvg from './slides/WhatIsSvg';
import CreatingSVG from './slides/CreatingSVG';
import ComplexGraphics from './slides/ComplexGraphics';

import TipOne from './slides/tips/TipOne';
import TipTwo from './slides/tips/TipTwo';
import TipThree from './slides/tips/TipThree';
import TipFour from './slides/tips/TipFour';

import TrickOne from './slides/tricks/TrickOne';
import TrickTwo from './slides/tricks/TrickTwo';
import TrickThree from './slides/tricks/TrickThree';

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
      <Slide title='User with Disabilities' id='example-disabilities'
        align='center' justify='center'>
        <Tiles fill={true} align='center'>
          <Tile pad='large'><img src='img/low_vision.jpg'
            title='low vision user reading screen' /></Tile>
          <Tile pad='large'><img src='img/blind.jpg'
            title='blind user using screen reader' /></Tile>
        </Tiles>
      </Slide>
      <Slide title='Accessibility @ JSConf' id='a11y-analogy'>
        <AccessibilityAnalogy />
      </Slide>
      <Slide title='How to be a good interpreter?' id='good-interpreter'>
        <HowToBeAGoodInterpreter />
      </Slide>
      <Slide title='Are you following HTML specs?' id='good-interpreter-1'>
        <GoodInterpreterAnchor />
      </Slide>
      <Slide title='Are you following HTML specs?' id='good-interpreter-2'>
        <GoodInterpreterParagraph />
      </Slide>
      <Slide id='demo'>
        <Demo />
      </Slide>
      <Slide title='What is SVG?' id='what-is-svg'>
        <WhatIsSvg />
      </Slide>
      <Slide title='SVG vs PNG, Fight!' id='png-or-svg'>
        <Box align='center' justify='center' pad='small'>
          <img src='img/png-vs-svg.gif' className='animated-git'
            title='Two men with a similar horse mask fighting' />
        </Box>
      </Slide>
      <Slide title='¿Dónde está Wally(SVG)?' id='png-or-svg-game'>
        <Tiles fill={true} align='center' justify='center'>
          <Tile pad='large'>
            <Heading tag='h2' strong={true}>#1</Heading>
            <img src='img/small-logo.png' width='96px' />
          </Tile>
          <Tile pad='large'>
            <Heading tag='h2' strong={true}>#2</Heading>
            <img src='img/small-logo.svg' width='96px' />
          </Tile>
        </Tiles>
      </Slide>
      <Slide title='Compare: SVG and PNG' id='png-or-svg-result'>
        <Tiles fill={true} align='center' justify='center'>
          <Tile pad='large'>
            <Heading tag='h3' strong={true}>#1 PNG (12kb)</Heading>
            <img src='img/small-logo.png' width='96px' />
          </Tile>
          <Tile pad='large'>
            <Heading tag='h3' strong={true}>#2 SVG (5kb)</Heading>
            <img src='img/small-logo.svg' width='96px' />
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
      <Slide title='Trick #1: Tabindex, role img, title and desc' id='trick-1'>
        <TrickOne />
      </Slide>
      <Slide title='Trick #2: Tabindex in each child with role of application' id='trick-2'>
        <TrickTwo />
      </Slide>
      <Slide title='Trick #3: Tabindex, role img in each child and role of application' id='trick-3'>
        <TrickThree />
      </Slide>
      <Slide title='Last Tip: Be Consistent' id='last-tip'>
        <Paragraph size='large'>Whatever "trick" you choose, apply the same one to all your data graphics.</Paragraph>
      </Slide>
      <Slide id='thank-you' align='center' justify='center' full={true}>
        <Heading strong={true} align='center'>
          Thank you!
        </Heading>

        <Heading tag='h2' align='center'>
          @alansouzati
        </Heading>

        <Heading tag='h2' align='center'>
          <Anchor primary={true} href='http://grommet.io/' target='_blank'
            label='grommet.io' />
        </Heading>

        <Heading tag='h2' align='center'>
          <Anchor primary={true} href='http://slackin.grommet.io/'
            target='_blank' label='slackin.grommet.io' />
        </Heading>
      </Slide>
    </Slides>
  );
};

export default JSConfSlides;
