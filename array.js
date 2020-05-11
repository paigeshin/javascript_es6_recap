const hobbies = ['Sports', 'Cooking', 1];

//looping
for (let hobby of hobbies) {
    console.log(hobby)
}

//원래의 array 값을 바꾸진 않음
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));


