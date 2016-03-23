import React, { Component, PropTypes } from 'react';
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

    // const books = this.props.books.map(book =>
    //     <p>{book}</p>
    // );

    const books = this.props.books.map(book =>
        <p key={book}>{book.name} ({book.authors})</p>
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
  books: state.books // TODO: pass books here somehow
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

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(BookList);
