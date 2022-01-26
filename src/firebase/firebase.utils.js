import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAtNoqnOO12_b_-knAwj3lYvwUvYmapQv0",
    authDomain: "crwn-bd-20871.firebaseapp.com",
    projectId: "crwn-bd-20871",
    storageBucket: "crwn-bd-20871.appspot.com",
    messagingSenderId: "88358338410",
    appId: "1:88358338410:web:0f9d5e402ecf4f11eb2f13"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;