import userActionTypes from './user.type'
export const setCurrentUser = user => ({
            type: 'SET_CURRENT_USER',
            payload: user
})

export const googleSigninStart = () => ({
            type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const googleSigninSuccess = (user) => ({
            type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
            payload: user
})

export const googleSigninFailure = (error) => ({
            type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
            payload: error
})



export const emailSigninStart = (emailAndPassword) => ({
            type: userActionTypes.EMAIL_SIGN_IN_START,
            payload: emailAndPassword
})

export const emailSigninSuccess = (user) => ({
            type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
            payload: user
})

export const emailSigninFailure = (error) => ({
            type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
            payload: error
})

