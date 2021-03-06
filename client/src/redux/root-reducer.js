import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist'
//localstorage
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import spinnerReducer from './spinner/spinner.reducer';
const persistConfig = {
            key: 'root',
            storage,
            //here user is not used because it is handled by firebase
            whitelist: ['cart']
}
const rootReducer = combineReducers({
            user: userReducer,
            cart: cartReducer,
            directory: directoryReducer,
            shop: shopReducer,
            spinner: spinnerReducer
});
export default persistReducer(persistConfig, rootReducer)