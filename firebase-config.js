// Firebase конфигурациясы
const firebaseConfig = {
    apiKey: "AIzaSyCH51-tv7rroIZ7Ky1UcHkhqppiEczuFws",
    authDomain: "testt-c9b47.firebaseapp.com",
    databaseURL: "https://testt-c9b47-default-rtdb.firebaseio.com",
    projectId: "testt-c9b47",
    storageBucket: "testt-c9b47.firebasestorage.app",
    messagingSenderId: "185255799913",
    appId: "1:185255799913:web:8c2a63c629d9d78f3586f8"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
