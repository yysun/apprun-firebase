import { app, Component, customElement } from 'apprun';

@customElement("my-counter")
export default class extends Component {
  state = 0

  view = (state) => <>
    <h1>{state}</h1>
    <button $onclick="-1">-1</button>
    <button $onclick="+1">+1</button>
  </>;

  update = {
    '-1': state => state - 1,
    '+1': state => state + 1
  }
}



