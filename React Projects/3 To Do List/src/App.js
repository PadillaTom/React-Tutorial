import React, { Component } from 'react';
// import uuid from 'uuid';// Old Import:
import { v4 as uuidv4 } from 'uuid'; // NEW SYNTAX
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos el MODULO! instalado con NPM
import TodoInput from './Component/TodoInput';
import TodoList from './Component/To Do List/TodoList';
//
// UUID NEW SYNTAX ----------------> IMPORT : import { v4 as uuidv4 } from 'uuid';
//                                   INVOKE : uuidv4();
//
//
//
//
// Main:
class App extends Component {
  //State:
  state = {
    items: [],
    id: uuidv4(), // Nos brinda numeros de ID, asi no tenemos que escribirlo nosotros
    item: '',
    editItem: false,
  };

  // Methods:
  handleChange = (e) => {
    // console.log('Handle Change'); // Vemos como LOG cuando type.
    this.setState({
      item: e.target.value, // Agrega a ITEM:" " --> El valor tipeado.
    });
  };
  handleSubmit = (e) => {
    // console.log('Handle Submit'); // Vemos el Submit y como refreshea. Prevent Default!
    e.preventDefault();
    const newItem = {
      id: this.state.id, // Agarramos el ID creada por UUID
      title: this.state.item, // Agarramos el VALUE pasado a ITEM (Change)
    };
    const updatedItems = [...this.state.items, newItem]; // Agarramos el Array con: Lo contenido + lo New
    this.setState({
      items: updatedItems, // Actualizamos array
      item: ' ', // Volvemos a vaciar el Value
      id: uuidv4(), // new ID
      editItem: false, // Volvemos a FALSE (Porque TURE dará la opcion de editItem)
    });
  };
  clearList = (e) => {
    // console.log('Clear List'); // Vemos al Tocar BTN
    this.setState({
      items: [], // Ponemos el Array Vacio.
    });
  };
  handleEdit = (id) => {
    // console.log(`Handle Edit : ${id}`); // Vemos al Tocar BTN
    // 1) Filtramos la lista como Delete
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    // 2) Get el Selected Item que NO esta en la FILTER ANTERIOR:
    //    SI matchea ID
    const selectedItem = this.state.items.find((item) => item.id === id);
    // Ponemos el item en el State:
    this.setState({
      items: filteredItems, // Mostramos la Filtered(sin el item)
      item: selectedItem.title, // En el input mostramos el NOMBRE del Selected
      id: id, // Mantenemos el mismo ID que antes
      editItem: true, // Cambia por los Style de Bootstrap
    });
  };
  handleDelete = (id) => {
    // console.log(`Handle Delete : ${id}`); // Vemos al Tocar BTN
    // Filter --> New Array = Items que no Match el ID Seleccionado
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems, // Actualizamos
    });
  };

  // Render()
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-5'>
            <h3 className='text-capitalize text-center'>To Do Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

// Export:
export default App;
