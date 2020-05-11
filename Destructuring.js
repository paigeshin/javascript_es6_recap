/*** Object Destrucring ***/

const person = {
    name: 'Paige',
    age: 28,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

//object에서 원하는 argument를 넣으면 된다.
const printName = ( {name, greet} ) => {

};

printName(person);

//변수로 가져오기
const { name, age } = person;
console.log(name, age);


//array
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobby2; //array element is pulled out by position
console.log(hobby1, hobby2);

