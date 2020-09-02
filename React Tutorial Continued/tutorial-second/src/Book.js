// ::::::::: STATE :::::::::::
// Class Based Component ---> RCC + Tab

import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    // console.log(this.props); // Vemos el BOOK 1 (array index 0)
    // Dentro de una CLass Based se usa THIS SIEMPRE!
    const { book, author } = this.props.info; // Una vez seteado el State, pedimos el PROPS INFO
    return (
      <article>
        <h3>Book: {book}</h3>
        <h3>Author: {author}</h3>
      </article>
    );
  }
}

// Debemos Acceder a las PROPS dadas en BookList aqui mismo.
// PROPS --->   <Book book={this.books[0]}></Book>
// Books es un Array que contiene 2 items. Keys: book and author
