import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.updateTodo = functions.firestore.document('requests/{Id}')
  .onWrite((change, context) => {
    const { uid, event, data } = change.after.data();

    const db = admin.firestore();
    const todos = db.collection('/users/' + uid + '/todos');

    switch (event) {
      case '@create-todo':
        todos.add(data);
        break;
      case '@update-todo':
        todos.doc(data.id).update(data);
        break;
      case '@delete-todo':
        todos.doc(data.id).delete();
        break;
      case '@delete-all-todo':
        db.collection('/users').doc(uid).delete();
      default: return;
    }
});
