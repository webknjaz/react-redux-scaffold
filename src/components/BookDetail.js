import React, { Component } from 'react';

export default class BookDetail extends Component {
  render() {
    const { bookId } = this.props.params;
    return (
      <section className="book-detail">
        Single Book {bookId} Detail here
      </section>
    );
  }
}
