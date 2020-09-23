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

                        console.log(userAuth)
                        if (!userAuth) return;
                        yield getSnapshotFromUserAuth(userAuth)
            } catch (error) {
                        yield put(SigninFailure(error))
            }
}

export function* onCheckUserSession() {
            yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}



export function* userSagas() {
            yield all([
                        call(onGoogleSigninStart),
                        call(onEmailSigninStart),
                        call(onCheckUserSession)
            ])
}