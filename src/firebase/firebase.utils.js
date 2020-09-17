import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
            apiKey: "AIzaSyBltoIL30Gi1PJXy0unkdv7WU-qowYqw9w",
            authDomain: "crown-db-182ce.firebaseapp.com",
            databaseURL: "https://crown-db-182ce.firebaseio.com",
            projectId: "crown-db-182ce",
            storageBucket: "crown-db-182ce.appspot.com",
            messagingSenderId: "876168278943",
            appId: "1:876168278943:web:9e765b891fbea78913c3aa"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
            if (!userAuth) {
                        return;
            }
            const userRef = firestore.doc(`users/${userAuth.uid}`);
            const snapShot = await userRef.get();
            console.log(snapShot)
            if (!snapShot.exists) {
                        //create and store user
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
                                    console.log(error.message);
                        }
            }
            return userRef;
}

firebase.initializeApp(config)
//authentication
export const auth = firebase.auth();
//store
export const firestore = firebase.firestore();

//popup google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;