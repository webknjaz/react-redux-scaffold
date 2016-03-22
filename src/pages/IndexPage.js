import React, { Component } from 'react';

import NavBar from '../components/NavBar';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Books DB</h1>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
