import React, { Component } from 'react';
import './App.scss';
import Navbar from './Components/NavBar/Navbar';
import TourList from './Components/Tour List/TourList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <TourList></TourList>
      </React.Fragment>
    );
  }
}
export default App;
