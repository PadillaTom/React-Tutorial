import React, { Component } from 'react';
import './tour.scss';
export default class Tour extends Component {
  render() {
    // console.log(this.props); // Vemos las Props Pasadas
    // Destructure each :
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    // console.log(this.props.tour.img); //NOS TIRA UNDEF

    // Return
    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt='Tour Img' />
          <span className='close-btn'>
            <i className='fas fa-window-close'></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <i className='fas fa-caret-square-down'></i>
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}
