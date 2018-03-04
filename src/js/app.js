
import React, { Component } from 'react';
import { render } from 'react-dom';
import createReactClass from 'create-react-class';
import { MessageRenderer } from './message';
import { Labels } from './label';
import { LabelsComposition } from './labelcomposition'

import '../css/style.css';

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
//render( <MessageRenderer message="Hi!" />, document.getElementById("app"));
//render( <Labels/>, document.getElementById("app"));
//render( <LabelsComposition/>, document.getElementById("app"));