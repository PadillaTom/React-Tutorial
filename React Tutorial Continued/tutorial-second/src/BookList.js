//  ::::::::::::: STATE :::::::::::::::
// Class Based Component --> RCC + Tab

import React, { Component } from 'react';
import Book from './Book';
import booksData from './BookData';

export default class BookList extends Component {
  // Relacionado con BOOKS DATA .js y el State: bookData
  constructor(props) {
    super(props); // SUPER = Inheritará del Component Class
    this.state = {
      books: booksData,
    };
  }
  //
  // :::::::::::::::::::: STATE
  // An object that contains DATA, could contain an API, 1million entrances, we woudlnt know
  // state = {
  // books: [
  //   {
  //     id: 1,
  //     book: 'Book number 1',
  //     author: 'John Doe',
  //   },
  //   {
  //     id: 2,
  //     book: 'Book number 2',
  //     author: 'Bobby',
  //   },
  // ],
  //
  // Otra manera de importar la data desde otro File (Modulo: BookData.js)
  // books: booksData,
  // };
  //
  // Handle Delete: Lo queremos pasar a nuestro NIETO (BUTTON dentro de BOOK)
  handleDelete = (id) => {
    // console.log(`I am from Parent Component`);
    // console.log(`My ID is: ${id}`);
    // PARA "BORAR" UN LIBRO DEL DOM ----> Que nos devuelva una lista sin el Item Seleccionado
    const sortedBooks = this.state.books.filter((item) => item.id !== id);
    // console.log(sortedBooks); // Vemos el nuevo Array creado, sin el Item Seleccionado
    this.setState({
      books: sortedBooks, // Modificamos el STATE a partir de SET STATE, haciendo pasar la Sorted Books
    });
  };
  render() {
    // Usar State base:
    // const books = this.state.books;
    // console.log(books); // Vemos que al momento es una ARRAY y tenemos varios methods para Array. Good Sign!
    // MAP METHOD: Crea New Array, Itera por cada item.
    // const books = this.state.books.map((item) => item.book); // Pedimos a cada item su KEY
    // console.log(books); // Vemos lo pedido, la KEY por cada item.
    /* Para el State, Book --> Para cada item, crear un BOOK con props INFO */
    /* NOS PIDE KEY --> Something unique, normally we get an ID for each item*/
    return (
      <section>
        <h3>This is our BookList</h3>
        {/* APLICAMOS MAP METHOD */}
        {this.state.books.map((item) => (
          <Book
            info={item}
            key={item.id}
            handleDelete={this.handleDelete} // Pasamos Handle Delete como PROP para BOOK
          ></Book>
        ))}
      </section>
    );
  }
}

// EN DEFINITIVA STATE:
// Pasamos la API por un STATE ={} y podemos luego aplicar los Array Methods
// En el ejemplo suamos MAP, para cada ITEM tomamos su info y creamos un <BOOK> con el estilo y estructura generada en Book.js
// A su vez es importantisimo dar una KEY, que la asociaremos al ID dada por la API
// De dicha manera podemos pasar infinita DATA dada por la API de manera dinamica
//
// OTRA MANERA STATE:
// --> State = {books: bookData} ---> Importada de otro Module (contiene un Array con la data)
// --> Constructor (props) { super (props); this.state ={books: booksData}}
// La Constructor tendrá mas propiedades a utilizas, será mas completa.
