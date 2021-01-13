import firebase from "firebase";

importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

const firebaseConfig = {
   apiKey: "AIzaSyCBFJrNV01OS_8Ole1za4JBfthNgOxQ2Jo",
   authDomain: "project-7a-push-notification.firebaseapp.com",
   projectId: "project-7a-push-notification",
   storageBucket: "project-7a-push-notification.appspot.com",
   messagingSenderId: "997046846655",
   appId: "1:997046846655:web:25691ff2696c0c0732f20a",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
