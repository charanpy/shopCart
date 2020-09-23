import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.type';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

import { googleSigninSuccess, googleSigninFailure } from './user.action'

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




export function* userSagas() {
            yield all([call(onGoogleSigninStart)])
}