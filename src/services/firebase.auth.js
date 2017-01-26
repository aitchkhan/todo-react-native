import * as _ from 'lodash';
import firebaseRef from './firebase';

import * as Toast from '../services/toast';

const auth = firebaseRef.auth();

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

export function getCurrentUser() {
  const user =  auth.currentUser;

  if(user !== null) {
    return user;
  } else return null;
}

export function updateUserInfo(userInfo) {
  let currentUser = auth.currentUser;
  if (_.has(userInfo, 'displayName') || _.has(userInfo, 'photoURL')) {
    if (currentUser) {
      return currentUser.updateProfile(userInfo)
      .then(() => {
        Toast.show('User info updated successfully');
      })
      .catch(error => {
        console.log(error);
        Toast.show(error);
      });
    }
  }
  
} 