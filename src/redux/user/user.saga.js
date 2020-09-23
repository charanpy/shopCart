import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.type';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { googleSigninSuccess, googleSigninFailure, emailSigninSuccess, emailSigninFailure } from './user.action'

//signinwith google
export function* signInWithGoogle() {
            try {
                        const { user } = yield auth.signInWithPopup(googleProvider);
                        const userRef = yield call(createUserProfileDocument, user);
                        const userSnapshot = yield userRef.get();
                        yield put(googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data }))
            } catch (error) {
                        yield put(googleSigninFailure(error))
            }
}

export function* onGoogleSigninStart() {
            yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

//signInWithEmailAnd Password

export function* signinWithEmail({ payload: { email, password } }) {
            try {
                        const { user } = yield auth.signInWithEmailAndPassword(email, password)
                        const userRef = yield call(createUserProfileDocument, user);
                        const userSnapshot = yield userRef.get();
                        yield put(emailSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data }))

            } catch (error) {
                        yield put(emailSigninFailure(error))
            }
}


export function* onEmailSigninStart() {
            yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signinWithEmail);
}





export function* userSagas() {
            yield all([
                        call(onGoogleSigninStart),
                        call(onEmailSigninStart)
            ])
}