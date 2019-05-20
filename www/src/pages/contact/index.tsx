import { app, Component } from 'apprun';

export default class extends Component {

  state = 'Contact'

  view = (state) => {
    return <div>
      {state}
    </div>
  }

  update = [
    ['.', state => state]
  ]

}