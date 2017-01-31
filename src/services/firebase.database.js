import firebaseRef from './firebase';
const database = firebaseRef.database();

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

export function getAssignment() {
  return assignmentsRef.once('value').then((snapshot) => {
    return snapshot.val();
  });
}

export function findAllUsers() {
  return usersRef.once('value').then(snap => snap);
}

