import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.scss';

import * as serviceWorker from './serviceWorker';
import Header from './components/Props/Header';
import Footer from './components/Props/Footer';
import Content from './components/Content';

import Console from './components/Console';

ReactDOM.render(
  <React.StrictMode>

    <div id="console">
      <Console />
    </div>
    <div id="frame">
      <div id="frame-wallpaper"></div>
      <Header />
      <Content />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
