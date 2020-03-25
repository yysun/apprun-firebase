import app from 'apprun';

declare var firebase;

function init(uid) {

  firebase.firestore().enablePersistence()
    .then(function () {

      const db = firebase.firestore();

      // if (location.hostname === "localhost") {
      //   db.settings({
      //     host: "localhost:8080",
      //     ssl: false
      //   });
      // }

      db.collection(`users/${uid}/todos`).orderBy('timestamp')
        .onSnapshot(snapshot => {
          app.run('@show-all', snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
        });

      db.collection(`events`).where("uid", "==", uid).onSnapshot(snapshot => {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            if (change.doc.metadata.hasPendingWrites) app.run('@saving')
          // } else if (change.type === "removed") {
          //   app.run('@done')
          }
        });
      });

      app.on('//:', (event, data = {}) => {
        db.collection(`events`).add({ uid, event, data })
      });

    }).catch(function (err) {
      console.log(err)
    })
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