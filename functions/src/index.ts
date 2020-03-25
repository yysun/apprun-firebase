import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.updateTodo = functions.firestore.document('events/{Id}')
  .onWrite((change, context) => {
    const dat = change.after.data() as any;
    if (!dat) return;

    const { uid, event, data } = dat;
    console.log('===>', uid, event, data);

    const db = admin.firestore();
    const del = () => db.doc(`events/${context.params.Id}`).delete();

    const todos = db.collection('/users/' + uid + '/todos');
    switch (event) {
      case '@create-todo':
        data.timestamp = admin.firestore.FieldValue.serverTimestamp();
        return todos.add(data).then(()=>del());
      case '@update-todo':
        return todos.doc(data.id).update(data).then(()=>del());
      case '@delete-todo':
        return todos.doc(data.id).delete().then(()=>del());
      case '@delete-all-todo':
        return todos.get().then(function (querySnapshot) {
          const batch = db.batch();
          querySnapshot.forEach(function (doc) {
            batch.delete(doc.ref);
          });
          return batch.commit().then(()=>del());;
        });
      default: return;
    }

});
