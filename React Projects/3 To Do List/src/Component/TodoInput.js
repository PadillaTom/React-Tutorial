import React, { Component } from 'react';

// Main:
export default class TodoInput extends Component {
  // Render
  render() {
    // Destructure Props:
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className='car car-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book'></i>
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='Add To-Do Item'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-block btn-primary mt-3 text-uppercase'
          >
            Add Item to List
          </button>
        </form>
      </div>
    );
  }
}
