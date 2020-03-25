import app from 'apprun';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import Error from './Error';
import todo from './todo';
import firebase from './firebase';

app.render(document.body, <Layout />);
const element = 'my-app';

new About().mount(element, { route: '#About' });
new Contact().mount(element, { route: '#Contact' });
new Error().mount(element);

todo.start(element, { route: '#, #Home' });
firebase();