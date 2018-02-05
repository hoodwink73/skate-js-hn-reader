// @jsx React.createElement

import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React, { Component } from 'react';

class HelloWorld extends Component {
  render () {
    return <span>Hello, {this.props.name}!</span>;
  }
}

const SkateComponent = withComponent(withReact());

class SkateReactHelloWorld extends SkateComponent {
  static get props() {
    return {
      name: props.string
    };
  }

  render ({props}) {
    return <HelloWorld {...props} />;
  }
}

customElements.define('skate-react-hello-world', SkateReactHelloWorld);
