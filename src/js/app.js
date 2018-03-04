
import React, { Component } from 'react';
import { render } from 'react-dom';
import createReactClass from 'create-react-class';


// Create a component named MessageComponent
var MessageComponent = createReactClass({
  render: function() {
    return (
      <div>{this.props.message}</div>
    );
  }
});

// Render an instance of MessageComponent into document.body
render( <MessageComponent message="Hello!" />, document.getElementById("app"));