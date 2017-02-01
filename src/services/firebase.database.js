import firebaseRef from './firebase';
import * as FirebaseAuth from './firebase.auth';
const database = firebaseRef.database();

let assignmentsRef = database.ref('assignments/');

let usersRef = database.ref('users/');


/* add user to users ref upon creation */
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

/*get assignment and filter for assignor-assignee*/
export function getAssignments(person) {
  console.log(FirebaseAuth.currentUser);
  if (person == 'assignor') {
    return assignmentsRef.orderByChild('assignor')
      .equalTo(FirebaseAuth.currentUser.email)
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
      });
  } else if (person == 'assignee')
    return assignmentsRef.orderByChild('assignee')
      .equalTo(FirebaseAuth.currentUser.email)
      .once('value')
      .then((snapshot) => {
        return snapshot.val();
      });
}

export function findAllUsers() {
  return usersRef.once('value').then(snap => snap);
}

