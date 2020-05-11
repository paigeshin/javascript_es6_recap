# javascript_es6_recap

### Javascript Summary

- Weakly Typed Language
- Object-Oriented Language
- Versatile Language
- No explicit type assignment
- Data types can be switched dynamically
- Data can be organized in logical objects
- Primitive and reference types
- Runs in browser & directly on a PC/ server
- Can perform a broad variety of tasks

### Object

```jsx
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
```

### Array

```jsx
const hobbies = ['Sports', 'Cooking', 1];

//looping
for (let hobby of hobbies) {
    console.log(hobby)
}

//원래의 array 값을 바꾸진 않음
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));
```

### Rest

```jsx
/*** Rest Operator ***/

//Before Refactoring
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));

//After Refactoring, Rest Operator를 사용하면, args 자체가 array다.
const toArrayWithRestOperator = (...args) => {
    return args
};

console.log(toArrayWithRestOperator(1, 2, 3, 4, 5, 6));
```

### Spread

```jsx
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
```

### Desturturing

```jsx
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
```

### Async Code

```jsx
/*** Async Await ***/

/*** Nested Async Call ***/

const fetchData = (callback) => {
  setTimeout(() => {
      callback('Done!');
  } , 1500);
};

//This code is asynchronous code because it's not executed right away
setTimeout(() => {
    console.log('Timer is done!');
    fetchData((text) => {
        console.log(text);
    });
}, 2000);

/*** Promise ***/
const fetchDataWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise
};

setTimeout(() => {
   console.log('Timer is done!');
    fetchDataWithPromise().then(text => {
        console.log(text);
        return fetchDataWithPromise();
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000);
```
