// Corremos un RAFCE, que nos dará todo preparado para crear complementos
//
//
//  --> RAFCE --> Regular Arrow Function Component and Export.
import React from 'react';

const rafceTest = () => {
  return <div></div>;
};

export default rafceTest;
// Estará en minuscula, pero a la hora de IMPORT debemos usar MAYUS
// eJ: RafceTest
//
//
// --> RFC --> Regular Function Component
import React from 'react';

export default function rafceTest() {
  return <div></div>;
}
