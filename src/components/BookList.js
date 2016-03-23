import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBooksSuccess, loadBooksFailure, loadBooksRequest } from '../actions/TodosAction.js';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchData();
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
        Book List here
        {books}
      </section>
    );
  }
}


const mapStateToProps = (state) => ({
  books: state.todos // TODO: pass books here somehow
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(loadBooksRequest());
    fetch('/api/books')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return json;
        }).then(
          (books) => dispatch(loadBooksSuccess(books)),
          (error) => dispatch(loadBooksFailure(error))
        );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
