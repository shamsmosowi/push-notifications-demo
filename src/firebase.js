// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp0giMyi75MoWtM7QNXOgDiuBSUmqDywg",
  authDomain: "rowy-testing.firebaseapp.com",
  projectId: "rowy-testing",
  storageBucket: "rowy-testing.appspot.com",
  messagingSenderId: "798521952343",
  appId: "1:798521952343:web:c43d4a045551354a82fb12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getTokenHandler = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey: 'BL60nAMDGAm5bvhCSA3YoRmD0ZfyYBEGTMLOMttiPSBM85HktuWoPP_yp4HGYzHvY3U1yROOQDkbddxlhA6sZf0'
}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});