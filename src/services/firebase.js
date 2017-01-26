import * as firebase from 'firebase';

import { firebaseConfig } from '../config'

const firebaseRef = firebase.initializeApp(firebaseConfig);

export default firebaseRef;