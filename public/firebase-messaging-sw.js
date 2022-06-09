// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
console.log("firebase service worker")
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAp0giMyi75MoWtM7QNXOgDiuBSUmqDywg",
  authDomain: "rowy-testing.firebaseapp.com",
  projectId: "rowy-testing",
  storageBucket: "rowy-testing.appspot.com",
  messagingSenderId: "798521952343",
  appId: "1:798521952343:web:c43d4a045551354a82fb12",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.imageUrl,
  };
  self.registration.showNotification(notificationTitle, notificationOptions)
});
