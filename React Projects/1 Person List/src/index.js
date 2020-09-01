import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

// Primer Component : Tarjeta con todos los datos
const Person = ({ img, name, job, children }) => {
  // TEMPLATE LITERALS NORMALES ---> ALOJADA EN VARIABLE // de JSX : {``}
  const imgURL = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className='person'>
      <img src={imgURL} alt='person' />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

// Function
const PersonList = () => {
  return (
    <section className='person-list'>
      <Person img='55' name='John' job='Dev'></Person>
      <Person img='22' name='Bob' job='Fire'>
        <p>I am a Children Text</p>
      </Person>
      <Person img='77' name='Dave' job='Design'></Person>
    </section>
  );
};

// Render
ReactDOM.render(<PersonList></PersonList>, document.getElementById('root'));
