import app from 'apprun';

declare var firebase;

function init(uid) {
  const db = firebase.firestore();
  db.collection(`users/${uid}/todos`)
    .onSnapshot(s => app.run('@show-all-todos', s));
  app.on('//:', (event, data) => {
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