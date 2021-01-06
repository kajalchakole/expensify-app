const person = {
    age: 30,
    location: {
        city: 'Pune',
        temp: 19
    }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location

if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


//Array destructuring
const address = ['1299 S Juniper Street', 'Phelidelphia', , '19147'];
const [street, , state = 'New York', ] = address;

console.log(`You are in ${state} ${street}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium, ] = item;

console.log(`A medium ${itemName} costs ${medium}`);
