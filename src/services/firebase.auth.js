import * as firebase from 'firebase';
import * as _ from 'lodash';

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

export function updateUserInfo(userInfo) {
  let currentUser = firebase.auth.currentUser;
  if (_.has(userInfo, 'displayName') || _.has(userInfo, 'photoURL')) {
    if (currentUser) {
      return currentUser.updateUserInfo(userInfo)
      .then(() => {
        Toast.show('User info updated successfully')
      })
      .catch(error => {
        console.log(error);
        Toast.show(error);
      });
    }
  }
  
} 