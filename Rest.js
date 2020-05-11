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