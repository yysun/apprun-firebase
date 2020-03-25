import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.updateTodo = functions.firestore.document('events/{Id}')
  .onWrite((change, context) => {
    const { uid, event, data } = change.after.data() as any;

    console.log('===>', uid, event, data);

    const db = admin.firestore();
    const todos = db.collection('/users/' + uid + '/todos');

    switch (event) {
      case '@create-todo':
        return todos.add(data);
      case '@update-todo':
        return todos.doc(data.id).update(data);
      case '@delete-todo':
        return todos.doc(data.id).delete();
      case '@delete-all-todo':
        return todos.get().then(function (querySnapshot) {
          const batch = db.batch();
          querySnapshot.forEach(function (doc) {
            batch.delete(doc.ref);
          });
          return batch.commit();
        });
      default: return;
    }
});
