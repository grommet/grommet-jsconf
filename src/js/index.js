import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import { setDefaultTitle } from 'grommet-presentation/utils/presentation';

import JSConfHeader from './components/JSConfHeader';
import JSConfSlides from './components/JSConfSlides';

setDefaultTitle('JSConf 2016');

const Main = () => {
  return (
    <App>
      <JSConfHeader />
      <JSConfSlides />
    </App>
  );
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
