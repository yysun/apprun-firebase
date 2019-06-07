import app from 'apprun-site';
import layout from './layout/index';
import pages from './_lib/index-esm';

const site = {
  title: 'My App',
  element: 'main',
  nav: [],
  sidebar: [],
  layout,
  pages,
  eventRoot: '/'
};

app(site);
