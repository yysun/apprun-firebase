import Page401 from './errors/401';
import Page404 from './errors/404';
import Page500 from './errors/500';

import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';

export default [
  // error pages
  [Page401, '///401'],
  [Page404, '///'],
  [Page500, '///500'],

  // add your pages here
  [Home, '#'],
  [Contact, '#Contact'],
  [About, '#About'],

] as (readonly [any, string])[];
