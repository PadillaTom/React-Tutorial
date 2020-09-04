import React, { Component } from 'react';
import Item from '../ToDo Item/TodoItem';

// Main
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h5>Hello form To Do LIST</h5>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </section>
    );
  }
}
