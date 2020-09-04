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
// Main:
class App extends Component {
  //State:
  state = {
    items: [
      { id: 1, title: 'Wake Up' },
      { id: 2, title: 'Shower' },
    ],
    id: uuidv4(), // Nos brinda numeros de ID, asi no tenemos que escribirlo nosotros
    item: '',
    editItem: false,
  };

  // Methods:
  handleChange = (e) => {
    console.log('Handle Change');
  };
  handleSubmit = (e) => {
    console.log('Handle Submit');
  };
  clearList = (e) => {
    console.log('Clear List');
  };
  handleEdit = (id) => {
    console.log(`Handle Edit : ${id}`);
  };
  handleDelete = (id) => {
    console.log(`Handle Delete : ${id}`);
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
