import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCDyzDBmOOvHwxTayCgxGD60d7sPJowMFg',
  authDomain: 'https://my-awesome-project-f248c.firebaseio.com/',
  databaseURL: 'https://my-awesome-project-f248c.firebaseio.com/'
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

/*
login meth
*/
export function signup(email, password) {
  const promise = auth.createUserWithEmailAndPassword(email, password);
  
  return promise;

}

export function signin(email, password) {
  const promise = auth.signInWithEmailAndPassword(email, password);
  
  return promise;
}