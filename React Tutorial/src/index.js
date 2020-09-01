//:::::::::::::: First Component :::::::::::::::::
// Importamos React y DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
//
// Regular Function as in JS ---> StateLess Functional Component: Always need to return JSX
// function Greeting() {
//   return (
//     <div>
//       <Person></Person> {/*Vemos como  "invokamos" el Person creado abajo*/}
//       {/* <h2>John Doe</h2> */}
//       {/* <p>This is my Message</p> */}
//       <Message> </Message>
//     </div>
//   ); // We return JSX but people call it HTML
// }

// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//   return <p>This is my Message</p>;
// };
//
// Arrow Functions -->
// const Greeting2 = () => {
// return React.createElement('h1', {}, 'Hello World'); // (Elemento, {props}, Child)
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'H2 Inside Div')
//   ); // (Elemento, {props}, Element(Nested element, {}, "Child"))
// };
//
// ------> Mandar al ROOT!
// Render ( QUE, Donde) ROOT --> Asociada al HTML
// Podemos ir comentando In an Out para Probar el DOM deseado
// ReactDOM.render(<Greeting></Greeting>, document.getElementById('root')); // Regular Function
// ReactDOM.render(<Greeting2></Greeting2>, document.getElementById('root')); // Arrow Function
//
//
//
//:::::::::::::: JSX Rules :::::::::::::::::
// Return a Single Element que contenga todo lo que querramos . Return (DIV whole website /DIV)
// Utilizar Semantics: DIV, Section, Article, segun corresponda
// <React.Fragment>  --> Si no queremos tener todo dentro de DIV, podemos usar esto para contener todo el Elemento
// <React.Fragment> </React.Fragment> === <> </>
// HTML CLass => className ="".
// Use CamelCase as in HTML attributes
//
//
//
//:::::::::::::: Mini Book :::::::::::::::::
// // Main Function:
// function Books() {
//   return (
//     <>
//       <section className='books'>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//       </section>
//     </>
//   );
// }
// // Components:
// // Metimos todo dentro de una misma Arrow Function (BOOK), luego la correremos en la Main (BOOKS)
// const Book = () => {
//   return (
//     <article className='book'>
//       <CoverImage></CoverImage>
//       <Title></Title>
//       <Author></Author>
//     </article>
//   );
// };
// const CoverImage = () => (
//   <img
//     width='200'
//     src='https://media.wired.com/photos/5be4cd03db23f3775e466767/master/w_1024%2Cc_limit/books-521812297.jpg'
//     alt=''
//   />
// );
// // Variable CSS:
// const titleStyle = {
//   letterSpacing: '7px',
//   color: 'red',
// };
// //
// const Title = () => <h1 style={titleStyle}>Read Books</h1>;

// const Author = () => (
//   <p style={{ fontStyle: 'italic', color: 'darkgray' }}>by Tomas Padilla</p>
// );
// // DOM
// ReactDOM.render(<Books></Books>, document.getElementById('root'));
//
//
//
//:::::::::::::: Javascript in JSX :::::::::::::::::
// function Person() {
//   const btn = 'Search Button';
//   const name = 'John';
//   const lastN = 'Pad';
//   // Return HTML (JSX):
//   return (
//     <section>
//       <button>{btn}</button> {/*Add JS Variable: {varName}*/}
//       {/* <h2>{name + ' ' + lastN}</h2> Tiene que ser una Expression dentro {} */}
//       <h2>{`${name} ${lastN}`}</h2> {/*Template Literals*/}
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo
//         tempore! Cupiditate provident deserunt perspiciatis corrupti.
//       </p>
//     </section>
//   );
// }
// // DOM
// ReactDOM.render(<Person> </Person>, document.getElementById('root'));
//
//
//
//:::::::::::::: Props (Properties) :::::::::::::::::
// Arguments to Components
// Queremos repetir la function PERSON muchas veces. Cambiando los Names y demas.
function People() {
  // Destructuring!!! --> Goes hand in hand with Props.
  // Lets say i have lots of props to use.
  const friends = [
    // Tenemos un Array al que podemos ingresar por INDEX
    { name: 'John', job: 'Dev', age: 23, company: 'Apple' },
    { name: 'bob', job: 'Deg', age: 23, company: 'Insta' },
    { name: 'Rafa', job: 'Medic', age: 26, company: 'Apple' },
  ];
  return (
    <section>
      {/* <p>content</p> */}
      <Person person={friends[0]}>
        <p>Some Text CHILDREN</p> {/* This is the CHILDREN!!!! */}
      </Person>
      {/*Child Props */}
      {/*Accedemos al ARRAY para poder DESTRUCTURE*/}
      <Person person={friends[1]}></Person>
      <Person person={friends[2]}></Person>
      {/* <Person name='Katy' job='Designer'></Person> */}
      {/* <Person
        name='Rafa'
        job='Designer'
        age='30'
        company='face'
        something='something'
      ></Person> */}
      {/*Estas Serán las Props: NAME JOB */}
    </section>
  );
}
//
// ---------------------> Regular Destructuring in JS:
// const person = {
//   name: 'John',
//   age: 26,
// };
// const { name } = person;
// console.log(name); // --> Vemos el Destructuring
// Otra manera de SIMPLE FUNCTION --->
// const showPerson = ({ name, age }) => console.log(name, age);
// showPerson(person); // --> Vemos el Destructuring
//
// SEGUNDA DESTRUCTURE:
// const Person = ({ children, person: { name, job, age, company } }) => {RETURN}
// PRIMERA DESTRUCTURE:
const Person = (props) => {
  const { name, job, age, company } = props.person;
  return (
    <article>
      <h1>{name}</h1>
      {/* {children} SEGUNDA DESTRUCTURE */}
      {props.children} {/* PRIMERA DESTRUCTURE */}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};
//
ReactDOM.render(<People> </People>, document.getElementById('root'));
