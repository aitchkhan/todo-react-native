import firebaseRef from './firebase';
const database = firebaseRef.database();

export default database;

export function addUser(uid, email, displayName) {
  database.ref('users/' + uid).set({
    email,
    displayName
  });
}

