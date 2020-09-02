// ::::::::: STATE :::::::::::
// Class Based Component ---> RCC + Tab

import React, { Component } from 'react';
// import Button from './Button';

export default class Book extends Component {
  // State para ejemplos: INMUTABLE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // Para mutarla: this.setState({})
  state = {
    count: 1,
    showInfo: true,
  };
  //
  //
  // :::::::::::::::::::::::::: Events
  // Regular Function ---------> NO PODEMOS USAR THIS, porque crean su propio Context
  // handleClick() {
  //   console.log('clicked Button');
  //   console.log(this.state.count);
  // }
  // Arrow Function  ---------->  THEY DONT CREATE THEIR OWN CONTEXT
  // handleClick = () => {
  //   console.log('you clicked me'); /
  //   console.log(this.state.count);
  // };

  // Functions:
  // addCount = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // resetCount = () => {
  //   this.setState({ count: (this.state.count = 0) });
  // };
  // lowerCount = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  //
  // :::::::::::::::::::  Conditionals in JSX
  // We will handle some Info (Inside the state set up inside BOOK)
  // We wanna toggle the TRUE to FALSE in ShowInfo
  handleInfo = () => {
    this.setState({
      // Modificamos el State
      showInfo: !this.state.showInfo, // Showinfo: convierte a lo NEGATIVO del State (togleara entre TRUE/False)
    });
  };

  render() {
    // console.log(this.props); // Vemos el BOOK 1 (array index 0)
    // Dentro de una CLass Based se usa THIS SIEMPRE!
    const { id, img, title, author } = this.props.info; // Una vez seteado el State, pedimos el PROPS INFO
    // const { handleDelete } = this.props; // Agarramos HandleDelete desde (this.props = BOOKLIST)
    // console.log(this.props); // Vemos que Handle Delete figura como PROPS
    // console.log(id); // Vemos las ID que nos interesa pasar en ONCLICK
    // Sucede que necesitamos crear una ARROW FUNCTION ANONIMA dentro de
    // OnClick ={()=> handleDelte(id)}
    // FUNCTION para show info
    const checkInfo = (info) => {
      if (info === true) {
        return <p>lorem</p>;
      } else {
        return null;
      }
    };
    return (
      <article className='book'>
        <img src={img} width='150' alt='' />
        <div>
          <h3>Book: {title}</h3>
          <h6>Author: {author}</h6>
          {/* <h3>Count: {this.state.count}</h3> */}
          {/* <button type='button' onClick={this.addCount}>
            Add Count
          </button>
          <button type='button' onClick={this.resetCount}>
            Reset Count
          </button>
          <button type='button' onClick={this.lowerCount}>
            Decrease Count
          </button> */}
          {/* <Button handleDelete={handleDelete}></Button> */}
          {/* <button type='button' onClick={() => handleDelete(id)}>
            Delete Me
          </button> */}
          <button type='button' onClick={this.handleInfo}>
            Toggle
          </button>
          {/* AND OPERATOR && --> TOGGLE: SI TRUE MUESTRA */}
          {/*  si "Izq" True && muestra "Der" */}
          {/* {this.state.showInfo && <p>Lorem ipsum dolor sit amet.</p>} */}
          {/*  */}
          {/* TERNARY OPERATOR --> Segun IZQ mostrará  ? Opcion A(true) : Opcion B(false) */}
          {/* Segun ? True : False */}
          {/* {this.state.showInfo ? <p>lorem</p> : null} */}
          {/*  */}
          {/* FUNCTION para show info */}

          {checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}

// Debemos Acceder a las PROPS dadas en BookList aqui mismo.
// PROPS --->   <Book book={this.books[0]}></Book>
// Books es un Array que contiene 2 items. Keys: book and author
//
// :::: PROP DRILLING ---> Passing Methods to Children or Child
// Queremos Recibir HANDLE DELETE from BOOKLIST (abuelo de este elemento)
// Pasamos HandleDelete como PROPS desde Booklist -> Book
