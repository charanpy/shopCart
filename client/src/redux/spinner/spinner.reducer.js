import spinnerType from './spinner.type.js';

const INITIAL_STATE = {
            loading: true
}

const spinnerReducer = (state = INITIAL_STATE, action) => {
            switch (action.type) {
                        case spinnerType.UPDATE_LOADING:
                                    return {
                                                ...state,
                                                loading: !state.loading
                                    }
                        default:
                                    return state;
            }
}

export default spinnerReducer;