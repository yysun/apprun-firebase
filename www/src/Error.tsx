import { app, Component } from 'apprun';

export default class ErrorComponent extends Component {
  view = ({ code, message }) => <>
    <div>{code}</div>
    <div>{message}</div>
  </>;

  update = {
    '//error': (_, state) => state
  };
}
