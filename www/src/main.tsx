// import './styles/main.scss';

import app from 'apprun';

import Layout from './layout';
import components from './components';

app.render(document.body, <Layout />);
const element = document.getElementById('main');
components.forEach(def => {
  const [Comp, event] = def;
  const component = new Comp().mount(element);
  app.on(event, (...p) => component.run('.', ...p));
});