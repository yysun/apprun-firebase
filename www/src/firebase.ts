import app from 'apprun';

declare var firebase;

function init(uid) {
  const db = firebase.firestore();

  // if (location.hostname === "localhost") {
  //   db.settings({
  //     host: "localhost:8080",
  //     ssl: false
  //   });
  // }

  db.collection(`users/${uid}/todos`)
    .onSnapshot(s => app.run('@show-all', s.docs.map(d => ({ id: d.id, ...d.data() }))));
  app.on('//:', (event, data = {}) => {
    db.collection(`events`).add({ uid, event, data })
  });
}

export default function () {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      app.run('//error', error);
    });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      init(user.uid);
    } else {
      app.run('//error', { message: 'Anonymous Sign In falied' });
    }
  });
}