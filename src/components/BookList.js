import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { loadBooksSuccess, loadBooksFailure, loadBooksRequest } from '../actions/TodosAction.js';


class BookList extends Component {
  static propTypes = {
    books: PropTypes.instanceOf(List).isRequired
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.isFetching) {
      return <p>Loading...</p>;
    }

    const books = this.props.books.toJS().map(book =>
        <li key={book.id}><Link to={{ pathname: `/books/${book.id}` }}>{book.name} ({book.authors[0].name})</Link></li>
    );

    return (

      <section className="book-list">
        Book List here
        {books}
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(loadBooksRequest());
    fetch('/api/books')
        .then((response) => response.json())
        .then(
          (books) => dispatch(loadBooksSuccess(books)),
          (error) => dispatch(loadBooksFailure(error))
        );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
