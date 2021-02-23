const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Error occured!!');
        resolve('This is my resolved data');    
        // resolve('This is my other resolved data');      
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('Error occured!!');
            resolve('This is my another resolved data');    
            // resolve('This is my other resolved data');      
        }, 5000);
    });
}).then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});

console.log('after');