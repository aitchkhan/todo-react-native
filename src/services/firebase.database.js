import firebaseRef from './firebase';
const database = firebaseRef.database();

export default database;

let assignmentsRef = database.ref('assignments/');
let usersRef = database.ref('users/');

export function addUser(uid, displayName, email) {
  database.ref('users/' + uid).set({
    email,
    displayName
  });
}

export function addAssignment(assignment) {
  let newAssignment = assignmentsRef.push();
  newAssignment.set(assignment);
}

export function findAllUsers() {
  return usersRef.once('value').then(snap => snap);
}

