import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBooksSuccess, loadBooksFailure, loadBooksRequest } from '../actions/TodosAction.js';

class BookList extends Component {
  static fetchData(dispatch) {
    dispatch(loadBooksRequest());
    return fetch('/api/books')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return json;
        }).then(
          (books) => dispatch(loadBooksSuccess(books)),
          (error) => dispatch(loadBooksFailure(error))
        );
  }

  componentDidMount() {
    this.constructor.fetchData((_) => _);
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    const books = this.props.books.map(book =>
        <p>{book}</p>
    );

    return (

      <section className="book-list">
        {books[0]}
        Book List here
      </section>
    );
  }
}

export default connect(state => ({
  books: state.books
}))(BookList);
