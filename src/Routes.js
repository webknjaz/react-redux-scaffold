import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(browserHistory, store);

import IndexPage from 'pages/IndexPage';
import TodoApp from 'components/TodoApp';

import BooksList from 'components/BookList';
import BookDetail from 'components/BookDetail';
import AuthorsList from 'components/AuthorList';
import AuthorDetail from 'components/AuthorDetail';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage}>
            <Route path="todo" component={TodoApp} />
            <Route path="books" component={BooksList} />
            <Route path="books/:bookId" component={BookDetail} />
            <Route path="authors" component={AuthorsList} />
            <Route path="authors/:id" component={AuthorDetail} />
        </Route>
      </Router>
    );
  }
}
