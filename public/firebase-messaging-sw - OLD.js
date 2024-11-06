// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBZhsfjXtlJlUGAPROFuodW_f1PthFCMts",
  authDomain: "vue-fcm-a5001.firebaseapp.com",
  projectId: "vue-fcm-a5001",
  storageBucket: "vue-fcm-a5001.appspot.com",
  messagingSenderId: "318896548482",
  appId: "1:318896548482:web:4e65ee97cf3337a3e7a29b",
  measurementId: "G-FCMKWZ6327",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title + " aaa";
  const notificationOptions = {
    body: payload.notification.body + " aaa",
    icon: "/logo_mtg_firebase.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
