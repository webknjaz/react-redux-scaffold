import React, { Component } from 'react';

export default class AuthorDetail extends Component {
  render() {
    const { authorId } = this.props.params;
    return (
      <section className="author-detail">
        Single Author {authorId} Detail here
      </section>
    );
  }
}
