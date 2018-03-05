import React, { Component } from 'react';
import { reactDom } from 'react-dom';
import { render } from 'react-dom';


import '../css/style.css';

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick(e) {
    console.log("event.nativeEvent => ");
    console.log(e.nativeEvent);

    console.log("--------------------------");
  }
  handleBlur(e) {
    console.log("Input value is => " + e.target.value);
    console.log("--------------------------");
  }
  handleClickWithArgs(param, e) {
    console.log("Param passed is => " + param);
    console.log("--------------------------");
  }
  render() {
    return (
      <div>
        <h3>Event in React.js Component </h3>

        <button onClick={this.handleClick}>Click me to see the 'event' object in console log!</button>
        <br/>
        <br/>

        <input type="text" defaultValue="" onBlur={this.handleBlur} />
        <br/>
        <br/>

        <button onClick={this.handleClickWithArgs.bind(this, 'React.js Demo')}>Pass param to event</button>
      </div>
    );
  }
}

render( <EventComponent/>, document.getElementById("app"));
