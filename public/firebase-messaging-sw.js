// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBZhsfjXtlJlUGAPROFuodW_f1PthFCMts",
  authDomain: "vue-fcm-a5001.firebaseapp.com",
  projectId: "vue-fcm-a5001",
  storageBucket: "vue-fcm-a5001.appspot.com",
  messagingSenderId: "318896548482",
  appId: "1:318896548482:web:4e65ee97cf3337a3e7a29b",
  measurementId: "G-FCMKWZ6327",
};
firebase.initializeApp(firebaseConfig);

class CustomPushEvent extends Event {
  constructor(data) {
    super("push");

    Object.assign(this, data);
    this.custom = true;
  }
}

/*
 * Overrides push notification data, to avoid having 'notification' key and firebase blocking
 * the message handler from being called
 */
self.addEventListener("push", (e) => {
  if (e.custom) return;

  const oldData = e.data;

  const newEvent = new CustomPushEvent({
    data: {
      ehheh: oldData.json(),
      json() {
        const newData = oldData.json();
        newData.data = {
          ...newData.data,
          ...newData.notification,
        };
        delete newData.notification;
        return newData;
      },
    },
    waitUntil: e.waitUntil.bind(e),
  });

  e.stopImmediatePropagation();
  dispatchEvent(newEvent);
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("belakang");
  console.log(payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body + "",
    icon: "/logo_mtg_firebase.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
