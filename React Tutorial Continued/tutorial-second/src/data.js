// ::::::: EXPORTS
//
// Primera Manera:
// export const name = 'John';
// export const age = 26;
// export const person = {
//   name: 'Joyn',
//   age: 20,
// };
// Segunda Manera:
const name = 'John';
const age = 26;
const person = {
  name: 'Joyn',
  age: 20,
};
// Segunda Manera:
export { name, age, person };

// No esta Exportada, no podremos acceder.
// const secretValue = 'Secret';
