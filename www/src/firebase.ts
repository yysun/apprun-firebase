import app from 'apprun';

declare var firebase;

function init(uid) {
  console.log(uid);
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