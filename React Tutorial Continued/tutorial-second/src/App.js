// :::::::::::::::::::: Imports and Exports :::::::::::::::::::::::
// Named and Default IMPORTS / EXPORTS
// Only one Default Export per module

// EXPORT DEFAULT --> Al importar podemos elegir el name
// Export default WhatWeExport
// Ej: Import WhatWeExport from "Path"
//
// Imports -->
// import React from 'react';
//
// Primera Manera: Importamos {NAME OF EXPORED} from FILE
// import { name, age, person } from './data'; // For JS Files no need of Extension
//
// Segunda Manera: Importamos ALL EXPORTED (*) as NAME (data) from FILE
// import * as data from './data';
//
//
// Function para la PRIMERA -->
// const App = () => (
//   <section>
//     <p>My content:</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     {/* <p>{person}</p> Objects cannot be used like this! */}
//     <p>{person.name}</p> {/* Only can Access KEYS*/}
//   </section>
// );
// Function para la SEGUNDA -->
// const App = () => (
// <section>
//   <p>My content:</p>
//   <p>{data.name}</p>
//   <p>{data.age}</p>
//   {/* <p>{person}</p> Objects cannot be used like this! */}
//   <p>{data.person.name}</p> {/* Only can Access KEYS*/}
//   </section>
// );

// Exports -->
// export default App;

//
//
//
// :::::::::::::::::::: Class Based Components :::::::::::::::::::::::
// State, Life cycle methods
// React Hooks
// Classes (syntactical sugar for Constructor Functions in JS)
// Subclass Component
// Inherits Functionality
// Component class is used to transfer from basic ES6 Class.

// Imports
// import React, { Component } from 'react';
// import { name, age, person } from './data';
// import Banner from './Components/Header/Banner';

// // Class
// class App extends React.Component {
//   render() {
//     {
//       /* SIEMPRE USAR RENDER(){RETURN()} */
//     }
//     return (
//       <section>
//         <Banner />{' '}
//         {/* BANNER: Si lo Escribo sin Importar, me lo importa automaticamente */}
//         <p>My content:</p>
//         <p>{name}</p>
//         <p>{age}</p>
//         {/* <p>{person}</p> Objects cannot be used like this! */}
//         <p>{person.name}</p> {/* Only can Access KEYS*/}
//       </section>
//     );
//   }
// }
// Export
// export default App;

//  Cual usar?  ---> Function VS Class Based Components
// It's all about preference. Segun necesitemos la Class podemos usarla, pero nos podriamos olvidar de aplicarla cuando la necesitamos.
// Conviene usar mas seguido la Class, ya veremos.
// CLASS tiene mas beneficios, mas usos.

//
//
//
// :::::::::::::::::::: Class Based Components :::::::::::::::::::::::
import React from 'react';
import BookList from './BookList';
import './App.css';

const App = () => (
  <section>
    <BookList> </BookList>
  </section>
);

export default App;
