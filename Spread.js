/*** Spread Operator for Array Copy ***/

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Programming');
console.log(hobbies);

/** copy array using slice **/
const copiedArray = hobbies.slice(); //사실 어레이를 짜르기 위해서 사용하기도 함.

/** Spread Operator **/
//different way to copy array using `spread`
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

/*** Spread Operator for Object Copy ***/
const person = {
  name: 'Paige',
  age: 28,
  greet() {
      console.log('Hi, I am ' + this.name);
  }
};
const copiedPerson = {...person};
console.log(copiedPerson);


