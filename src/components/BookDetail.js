import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { loadBooksSuccess, loadBooksFailure, loadBooksRequest } from '../actions/TodosAction.js';

export default class BookDetail extends Component {
  static propTypes = {
    books: PropTypes.instanceOf(List).isRequired
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { bookId } = this.props.params;

    const book = [...this.props.books.toJS()].filter(b => {
      console.log(b.id, bookId);
      console.log(b.id === bookId);
      return b.id === bookId;
    }).reduce((a, b) => b, {});
    console.log(book);
    return (
      <section className="book-detail">
        Single Book {bookId} Detail here:<br />
        <li>Name: {book.name}</li>
        <li>Genre: {book.genre_s}</li>
        <li>Pages: {book.pages_i}</li>
        <li>Price: ${book.price} ({book.inStock ? 'in stock' : ''})</li>
        <li>ID: {book.id}</li>
        <li>Categories: {book.cat}</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
