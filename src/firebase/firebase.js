import firebase from 'firebase/app';
require('firebase/database');
const firebaseConfig = {
    apiKey: "AIzaSyATKNgzmsnnlPzA0xDSDF7zNW7bOe0pWYw",
    authDomain: "expensify-592ea.firebaseapp.com",
    databaseURL: "https://expensify-592ea-default-rtdb.firebaseio.com",
    projectId: "expensify-592ea",
    storageBucket: "expensify-592ea.appspot.com",
    messagingSenderId: "691549649335",
    appId: "1:691549649335:web:50389183420d53b1f9d032",
    measurementId: "G-5QM18KB6S7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//working with firebase database
const database = firebase.database();

database.ref('name').once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((e) => {
        console.log('Error fetching data');
    });


//refer a part of the database to store data in it. if not provided any parameter, we are at the root of the database
database.ref().set({
    name: 'Kajal',
    age: 30,
    isSingle: false,
    location: {
        city: 'Pune',
        country: 'INDIA'
    }
});


// database.ref().set('This is my data.');
database.ref().update({
    age:31
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('Failed!', error);
});

// database.ref('age').set(30.5);
// database.ref('location/city').set('Mumbai');

//adding new attribute object
database.ref('attributes').set({
    height: 162,
    weight: 56
}).then(() => {
    console.log('Attributes saved');
}).catch((e) => {
    console.log('Update failed', e);
});

database.ref('isSingle').remove()
.then(() => {
    console.log('isSingle removed');
})
.catch((e) => {
    console.log('Could not remove data');
});

database.ref('location/city').set(null);

database.ref().update({
    age: 31,
    name: 'Mike',
    job: 'Developer',
    'attributes/height': null
});

database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

setTimeout(() => {
    database.ref('age').set(26);
}, 3500);


setTimeout(() => {
    database.ref().off();
}, 7000);


setTimeout(() => {
    database.ref('age').set(31);
}, 10500);