// @jsx React.createElement

import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';
import React from 'react';

const Component = withComponent(withReact());

class skateReactHelloWorld extends Component {
  static get props() {
    return {
      name: props.string
    };
  }

  render ({name}) {
    return <span>Hello, {name}!</span>;
  }
}

customElements.define('skate-react-hello-world', skateReactHelloWorld)
