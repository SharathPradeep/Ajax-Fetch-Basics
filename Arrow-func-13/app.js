// const sayHello=function(){
//     console.log('Hello');
// }

// const sayHello= () => {
//     console.log('Hello');
// }

// one line doesn't need braces
// const sayHello= () => console.log('Hello');

// one line return
// const sayHello= () => 'Hello';

// return objects
// const sayHello= () => ({msg:'Hello'});

// single parameter -no ()
// const sayHello= name => `Hello ${name}`;

// multiple parameters
// const sayHello= (first,last) => `Hello ${first} ${last}`;

// console.log(sayHello('Sharath','Pradeep'));


const users=['William','Joey','Ross'];

// const nameLengths= users.map(function (name){
//     return name.length;
// });

// using arrow
const nameLengths=users.map(name => name.length);

console.log(nameLengths);
