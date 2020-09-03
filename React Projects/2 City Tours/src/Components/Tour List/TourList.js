import React, { Component } from 'react';
// TOUR usa Package.Json entonces no hace falta seleccionar el MAIN FILE.Ext
import Tour from '../Tour/';
import './tourList.scss';
import { tourData } from '../../tourData';

// Main:
export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  // Remove Tour:
  removeTour = (id) => {
    // console.log(id);// Comprobamos el Tour OnClick en TOUR CLOSE BTN
    const { tours } = this.state;
    // Filtramos la Array Tours
    const sortedTours = tours.filter((tour) => tour.id !== id); // Nueva Array: Para cada Tour dentro del Array, guardar en NEW los tour que no comparten la misma ID
    // Display la New Array:
    this.setState({ tours: sortedTours });
  };

  render() {
    // console.log(this.state.tours);// Comprobamos el STATE
    // Destructure the Sate para conseguir Tour:
    const { tours } = this.state;

    // Return:
    return (
      <section className='tourlist'>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
