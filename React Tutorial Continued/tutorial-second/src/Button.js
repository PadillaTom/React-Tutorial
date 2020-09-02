import React from 'react';

export default function Button({ handleDelete }) {
  return (
    <button
      type='button'
      style={{ background: 'red', color: 'white', fontSize: '2rem' }}
      onClick={handleDelete}
    >
      Delete Me
    </button>
  );
}
// Arbol Genealogico:
// BookList --> Book --> Button
// Creamos un HandleDelete como Method dentro de Booklist,
// Agregamos el Method como PROP del Book dentro de Return() en BookList
// en Book Destructuramos "const {handleDelete} = this.props" tomado de Booklist
// Pasamos el Handle Delete como PROP para Button dentro de Return() en Book
// Aqui mismo: BUTTON --> Button({handleDelete}) Pasamos como Parametro
// Le damos un Evento a HandleDelete --> onClick = {Handle Delete!}
