// ::::::::::::::::: PROP TYPES, OBJECT SHAPE :::::::::::::::::::::::
//
// import React, { Component } from 'react';
// import './App.css';
// import PropTypes from 'prop-types';

// // Ejemplos de cuando STATE Falla:
// // Podemos usar: PROPTYPES, isRequired, defaultProps
// // Mas Avanzado: Object Shape --> Tenemos PERSON as Prop Object, no each individual
// //
// // Function
// const Person = ({ person: { img, name, age, info } }) => {
//   // const {img,name,age,info} = props.person // Otra manera de Destructure
//   // console.log(info); // Object Shape: Vemos que la INFO es undefined
//   return (
//     <article>
//       <img src={img} alt='img' />
//       <h4>name: {name}</h4>
//       <h4>age: {age}</h4>
//       <h4>Some Info: {info || 'Dirty Info with OR operator'}</h4>
//     </article>
//   );
// };
// // ::::::: PROP TYPES :::::::::
// // NPM INSTALL --SAVE PROP-TYPES --->
// // PropTypes: Nos tirará errores en la CONSOLE si hay algun "messup" en el STATE.
// //      Ej: Image is a Number, Age is a STR.--> 1) Check Props. 2) Check State.
// // IsRequired: Nos tirará error en CONSOLE si no se encuentra algo REQUIRED
// //      Ej: Para la ID 2 nos falta la Img, Age, etc...
// // DefaultProps : Will Render something in case some data is missing.
// // Person.propTypes = { // Regular.
// //   img: PropTypes.string.isRequired,
// //   name: PropTypes.string.isRequired,
// //   age: PropTypes.number.isRequired,
// //   info: PropTypes.string.isRequired,
// // };
// Person.propTypes = {
//   // OBJECT SHAPED --> Nos tirará error tambien, ya que no hay Default
//   person: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     info: PropTypes.string.isRequired,
//   }),
// };
// Person.defaultProps = {
//   img: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
//   name: 'Default Name',
//   age: 0,
//   info: 'Default Info',
// };
// //
// //
// //
// //
// // Class donde pasaremos Person:
// class PersonList extends Component {
//   state = {
//     people: [
//       {
//         id: 1,
//         img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
//         name: 'john',
//         age: 24,
//       },
//       {
//         id: 2,
//         img: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
//         name: 'Thomas',
//         age: 65,
//       },
//       {
//         id: 3,
//         img: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
//         name: 'Thomas',
//         age: 65,
//         info: 'Some info',
//       },
//     ],
//   };
//   render() {
//     return (
//       <section>
//         {this.state.people.map((person) => (
//           <Person
//             key={person.id}
//             // Normal Props:
//             // img={person.img}
//             // name={person.name}
//             // age={person.age}
//             // info={person.info}
//             // Object Shape Props:
//             person={person} // Si pasamos una PROP como Object, necesitaremos usar SHAPE
//           ></Person>
//         ))}
//       </section>
//     );
//   }
// }

// //
// //
// //
// // Export Defaul:
// export default class App extends Component {
//   render() {
//     return <PersonList></PersonList>;
//   }
// }
//
//
//
// ::::::::::::::::::: Controlled Inputs and Forms :::::::::::::::::
// Controlled Inputs: Buscaremos un VALUE en ONCHANGE event.
// Todo será guardado en State.
// 1) Creamos el Form
// 2) Setteamos el State
// 3) Buscaremos los Values!
import React, { Component } from 'react';
import './App.css';
class Form extends Component {
  // State for Controlled Form: Generalmente estará Vacio!
  state = {
    firstName: ' ',
    lastName: ' ',
    people: [],
  };
  // Method para On Change:
  handleChange = (evt) => {
    // console.log(evt.target); // Vemos que nos muestra DONDE sucede el Evento: INPUT
    // console.log(evt.target.name); // El NAME: First or Last, importante para saber donde se alojan dichos Valores
    // console.log(evt.target.value); // Nos muestra los Valores (what we type)
    //
    // Primera Manera de Contorlar El Input:
    // if (evt.target.name === 'firstName') {
    //   const textValue = evt.target.value;
    //   this.setState({
    //     firstName: textValue,
    //   });
    // }
    //
    // Segunda y Mejor Manera de Controlar Input:
    // Asociamos el NAME al VALUE (ej: FirstName= Input, LastName=Input)
    // Ademas lo metemos en el State previamente preparado.
    this.setState({
      [evt.target.name]: [evt.target.value],
    });
  };
  //
  // Method para Submit:
  handleSubmit = (e) => {
    e.preventDefault();
    // Alojamos los Valores en Variables!
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    // console.log(firstName, lastName); // Vemos dichas Variables
    //
    // Alojar los valores en Array (State)
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName} `; // Armamos la Template Literal del Full Name
      this.setState({
        people: [...this.state.people, person], // Tenemos el People con Spread Operatar para usar dicha People + Person
        firstName: '',
        lastName: '',
      });
    }
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type='submit'>Submit</button>
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

//
class App extends Component {
  render() {
    return <Form></Form>;
  }
}

export default App;
