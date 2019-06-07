import { app, Component } from 'apprun'

export default class extends Component {

  state = 'This is a page made from an AppRun component. It has embedded a counter web component.'

  view = (state) => <>
    <h1>Contact</h1>
    <div>{state}</div>
    <my-counter></my-counter>
    <br /><br />
    <div>Try edit src/pages/contact.tsx file to change the content here.</div>
  </>

}