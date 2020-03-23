import app from 'apprun';
// import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import Error from './Error';
import todo from './todo';
import firebase from './firebase';

app.start(document.body, 0, ()=><Layout />);

const element = 'my-app';
// new Home().start(element, { route: '#, #Home' });
new About().mount(element, { route: '#About' });
new Contact().mount(element, { route: '#Contact' });
new Contact().mount(element, { route: '#Contact' });
new Error().mount(element);

todo.start(element, { route: '#, #Home' });
firebase();