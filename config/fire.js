import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANv-u4AnV5oGmBEjyoi14zvx9RnURPZoY",
    authDomain: "encrypto-polytechnic.firebaseapp.com",
    databaseURL: "https://encrypto-polytechnic.firebaseio.com",
    projectId: "encrypto-polytechnic",
    storageBucket: "encrypto-polytechnic.appspot.com",
    messagingSenderId: "220539569957",
    appId: "1:220539569957:web:d13d04a51efd84fac77ccc",
    measurementId: "G-FD5NF92VE1"
};


try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const fire = firebase;
export default fire;