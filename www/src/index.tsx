import app from 'apprun-site/dist'; // <== !IMPORTANT!

import layout from './layout/index';
import pages from './_lib/index';

import './components/counter';
import './components/my-xkcd';

const site = {
  title: 'My AppRun Site',
  element: 'main',
  nav: [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
  ],
  sidebar: [
    { "text": "Home", "link": "/" },
    { "text": "Contact", "link": "/contact" },
    { "text": "About", "link": "/about" }
  ],
  layout,
  pages,
  eventRoot: '/'
};

app.start(site);
