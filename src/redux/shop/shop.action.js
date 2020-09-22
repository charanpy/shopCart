import shopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
            type: shopActionTypes.FETCH_COLLECTIONS_START

})

export const fetchCollectionSuccess = collectionsMap => ({
            type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            payload: collectionsMap
})

export const fetchCollectionFailure = (errorMessage) => ({
            type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payload: errorMessage
})

export const fetchCollectionAsync = () => {
            return dispatch => {
                        const collectionRef = firestore.collection("collections");
                        console.log(collectionRef)
                        dispatch(fetchCollectionStart())

                        collectionRef.get().then(snapshot => {

                                    const collectionsMap = convertCollectionSnapshotToMap(snapshot);
                                    console.log(collectionsMap)
                                    dispatch(fetchCollectionSuccess(collectionsMap))
                                    //this.props.updateCollection(collectionsMap);
                        }).catch(e => dispatch(fetchCollectionFailure(e.message)))
            }
}