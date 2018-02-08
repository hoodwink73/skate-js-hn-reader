// @jsx React.createElement
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import React, {Component} from 'react';
import { props, withComponent } from 'skatejs';
import withReact from '@skatejs/renderer-react';

const SkateComponent = withComponent(withReact());

const News = function () {
  return <span>News</span>
}

const Jobs = function () {
  return <span>Jobs</span>
}

class App extends Component {
  render () {
    const {defaultRoute} = this.props;
    console.log(defaultRoute);
    return (
      <div>
        <Link to="/news">News</Link>
        <Link to="/jobs">Jobs</Link>
        <Route path="/news" component={News} />
        <Route path="/jobs" component={Jobs} />
        <Redirect to={defaultRoute}/>
      </div>
    );
  }
}

class AppWithRouter extends Component {
  render () {
    return (
      <Router>
        <App {...this.props}/>
      </Router>
    );
  }
}

class SkateHNApp extends SkateComponent {
  static get props() {
    return {
      defaultRoute: props.string
    };
  }


  render ({props}) {
    return <AppWithRouter {...props} />;
  }
}

customElements.define('skate-hn-app', SkateHNApp);
