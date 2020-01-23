import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBojuSJisIyxRbLL6bCPmSB8I_ocfAD-H8',
  authDomain: 'tanyaherbal-adfcc.firebaseapp.com',
  databaseURL: 'https://tanyaherbal-adfcc.firebaseio.com',
  projectId: 'tanyaherbal-adfcc',
  storageBucket: 'tanyaherbal-adfcc.appspot.com',
  messagingSenderId: '521248531775',
  appId: '1:521248531775:web:2b43fe4ee4845c1d551f8a'
}

// Initialize Firebase
export const Firebase = firebase.initializeApp(firebaseConfig)
