import { app, Component } from 'apprun';

export default class extends Component {

  state = 'About'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = [
    ['.', state => state]
  ]

}