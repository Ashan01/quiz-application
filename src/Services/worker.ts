import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyCBFJrNV01OS_8Ole1za4JBfthNgOxQ2Jo",
   authDomain: "project-7a-push-notification.firebaseapp.com",
   projectId: "project-7a-push-notification",
   storageBucket: "project-7a-push-notification.appspot.com",
   messagingSenderId: "997046846655",
   appId: "1:997046846655:web:25691ff2696c0c0732f20a",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
   Notification.requestPermission().then((permission) => {
      console.log(permission);
      if (permission === "granted") {
         messaging
            .getToken()
            .then((currentToken) => {
               if (currentToken) {
                  console.log("TOKEN");
                  console.log(currentToken);
               } else {
                  console.log("No Instance ID token available. Request permission to generate one.");
               }
            })
            .catch((error) => {
               console.log("An error occurred while retrieving token. ", error);
            });
      }
   });
}
