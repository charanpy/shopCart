import userActionTypes from './user.type'

const INITIAL_STATE = {
            currentUser: null,
            error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
            const { type, payload } = action;

            switch (type) {
                        case userActionTypes.SIGN_IN_SUCCESS:

                                    return {
                                                ...state,
                                                currentUser: payload,
                                                error: null
                                    }
                        case userActionTypes.SIGN_IN_FAILURE:

                                    return {
                                                ...state,
                                                error: action.payload
                                    }


                        default:
                                    return state;
            }
}

export default userReducer;