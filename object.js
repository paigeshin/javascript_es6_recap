//syntax 유형 1
const person = {
    name: 'Paige',
    age: 28,
    greet: () => {
        console.log('Hi, I am ' + this.name);
    }
};

//syntax 유형 2
const person2 = {
    name: 'Paige',
    age: 28,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();