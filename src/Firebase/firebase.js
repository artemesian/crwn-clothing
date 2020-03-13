import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBwcAxkS9s0V49rj97psQ2LPFpyxoG4F-M",
	authDomain: "crwn-db-f1438.firebaseapp.com",
	databaseURL: "https://crwn-db-f1438.firebaseio.com",
	projectId: "crwn-db-f1438",
	storageBucket: "crwn-db-f1438.appspot.com",
	messagingSenderId: "525911023173",
	appId: "1:525911023173:web:8617519099461adf674d2c",
	measurementId: "G-0H4HMKG1WZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user',error.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase