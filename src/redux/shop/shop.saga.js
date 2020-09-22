//listens for every action/events
//call-function invoke/call
//put-dispatch
import { takeLatest, call, put } from 'redux-saga/effects';

import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import {
            fetchCollectionSuccess,
            fetchCollectionFailure
} from './shop.action'

export function* fetchCollectionsAsync() {
            try {
                        const collectionRef = firestore.collection("collections");
                        const snapshot = yield collectionRef.get();
                        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)
                        yield put(fetchCollectionSuccess(collectionsMap))
            } catch (e) {
                        yield put(fetchCollectionFailure(e.message))
            }

}

export function* fetchCollectionsStart() {
            yield takeLatest(
                        shopActionTypes.FETCH_COLLECTIONS_START,
                        fetchCollectionsAsync
            )
}