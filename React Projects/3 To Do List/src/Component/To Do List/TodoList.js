import React, { Component } from 'react';
import Item from '../ToDo Item/TodoItem';
import TodoItem from '../ToDo Item/TodoItem';

// Main
export default class TodoList extends Component {
  render() {
    // Destructure Props:
    const { items, clearList, handleDelete, handleEdit } = this.props;
    // Return:  ITEMS.MAP (Iteramos cada item del ARRAY y lo display!)
    //          HandleStuff --> No queremos correr la function en el Evt, pasamos una Arrow Function
    return (
      <ul className='list-group my-5'>
        <h3 className='text-capitalize text-center'>to-do list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}
        <button
          type='button'
          className='btn btn-danger btn-block text-uppercase mt-5'
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
