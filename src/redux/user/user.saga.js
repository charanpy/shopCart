import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.type';

import {
            auth,
            googleProvider,
            createUserProfileDocument,
            getCurrentUser
} from '../../firebase/firebase.utils';

import {
            SigninSuccess,
            SigninFailure,
            signOutSuccess,
            signOutFailure,
            signUpSuccess,
            signUpFailure

} from './user.action'

export function* getSnapshotFromUserAuth(userAuth) {
            try {

                        const userRef = yield call(createUserProfileDocument, userAuth);
                        const userSnapshot = yield userRef.get();
                        yield put(SigninSuccess({ id: userSnapshot.id, ...userSnapshot.data }))
            } catch (error) {
                        yield put(SigninFailure(error))
            }
}


//signinwith google
export function* signInWithGoogle() {
            try {
                        const { user } = yield auth.signInWithPopup(googleProvider);
                        yield getSnapshotFromUserAuth(user)
            } catch (error) {
                        yield put(SigninFailure(error))
            }
}

export function* onGoogleSigninStart() {
            yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

//signInWithEmailAnd Password

export function* signinWithEmail({ payload: { email, password } }) {
            try {
                        const { user } = yield auth.signInWithEmailAndPassword(email, password)
                        yield getSnapshotFromUserAuth(user)
            } catch (error) {
                        yield put(SigninFailure(error))
            }
}


export function* onEmailSigninStart() {
            yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signinWithEmail);
}

export function* isUserAuthenticated() {
            try {
                        const userAuth = yield getCurrentUser();


                        if (!userAuth) return;
                        yield getSnapshotFromUserAuth(userAuth)
            } catch (error) {
                        yield put(SigninFailure(error))
            }
}

export function* onCheckUserSession() {
            yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

//signout
export function* signOut() {
            try {
                        yield auth.signOut();
                        yield put(signOutSuccess())
            } catch (error) {
                        yield put(signOutFailure(error))
            }
}

export function* onSignoutStart() {
            yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

//signup
export function* signUp({ payload: { email, password, displayName } }) {
            try {
                        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
                        console.log(user)
                        yield createUserProfileDocument(user, { displayName })
                        yield put(signUpSuccess())
            } catch (error) {
                        yield put(signUpFailure(error))
            }
}

export function* onSignUpStart() {
            yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}



export function* userSagas() {
            yield all([
                        call(onGoogleSigninStart),
                        call(onEmailSigninStart),
                        call(onCheckUserSession),
                        call(onSignoutStart),
                        call(onSignUpStart)
            ])
}