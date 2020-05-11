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