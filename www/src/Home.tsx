import { app, Component } from 'apprun';

export default class HomeComponent extends Component {
  state = 0;
  view = state => {
    const add = (state, num) => state + num;
    return <div>
      <h1>{state}</h1>
      <div>
        <button $onclick={[add, -1]}>-1</button>
        <button $onclick={[add, +1]}>+1</button>
        <div>Run the counter locally</div>
      </div>
    </div>
  };

  update = {
    '@add': (_, state) => state
  }

}

