//nested function scope

// let a = 10;

// function outer(){
//     let b = 20;

//     function inner(){
//         let c = 30;
//         console.log(a, b, c)
//     }
//     inner();
// }
// outer();

//-----------------------------------------

//closures

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

//----------------------------------------

//Function Currying

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 3, 5));

// function curry(fn){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);
//             }
//         }
//     }
// }

// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

//----------------------------------------

//this keyword

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }

// sayMyName('Walter White');
// sayMyName('Heisenberg');

//this keyword - implicit binding

// const person = {
//     name: 'Amar',
//     sayMyName: function(){
//         console.log(`My name is ${this.name}`)
//     }
// }

// person.sayMyName();

//this keyword - explicit binding

// function sayMyName(){
//     console.log(`My name is ${this.name}`);
// }

// sayMyName.call(person);

//this keyword - new binding

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Amar");
// const p2 = new Person("Batman");

// console.log(p1.name, p2.name);

//this keyword - default binding

// globalThis.name = 'Superman';
// sayMyName();

//Prototype

// function Person(fname, lname) {
//   this.firstName = fname;
//   this.lastName = lname;
// }

// const person1 = new Person("Bruce", "Wayne");
// const person2 = new Person("Clark", "Kent");

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(person1.getFullName());
// console.log(person2.getFullName());

//Prototypal inheritance

// function Person(fname, lname) {
//   this.firstName = fname;
//   this.lastName = lname;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// function SuperHero(fname, lname) {
//   Person.call(this, fname, lname);
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting Crime");
// };

// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero("Bruce", "Wayne");

// SuperHero.prototype.construcor = SuperHero;

// console.log(batman.getFullName());

//Class

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const personC1 = new Person("Bruce", "Alikadić");

// console.log(personC1.sayMyName());

// class SuperHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperHero = true;
//   }

//   fightCrime() {
//     console.log("Fighting Crime");
//   }
// }


// const batman = new SuperHero('Amar','Alikadić');

// console.log(batman.sayMyName());

//Iterables and Iterators - Why ?

// const str = 'Amar';

// console.log(str.length);

// for (let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

// const arr = ['a','m','a','r'];

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const str = 'Amar';

// for(const char of str){
//   console.log(char);
// }

// const arr = ['A','m','a','r'];

// for(const item of arr){
//   console.log(item);
// }