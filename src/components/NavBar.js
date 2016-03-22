import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navigation-menu">
        <Link to="/todo" activeClassName="active">Go to TodoList</Link>
        &nbsp;|&nbsp;
        <Link to="/books" activeClassName="active">Go to BooksList</Link>
        &nbsp;|&nbsp;
        <Link to="/authors" activeClassName="active">Go to AuthorsList</Link>
      </nav>
    );
  }
}
