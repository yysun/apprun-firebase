import { app, Component } from 'apprun';

export default class extends Component {
  view = _ => { app.run('/README') }
}