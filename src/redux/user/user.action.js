import userActionTypes from './user.type'


export const googleSigninStart = () => ({
            type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const SigninSuccess = (user) => ({
            type: userActionTypes.SIGN_IN_SUCCESS,
            payload: user
})

export const SigninFailure = (error) => ({
            type: userActionTypes.SIGN_IN_FAILURE,
            payload: error
})



export const emailSigninStart = (emailAndPassword) => ({
            type: userActionTypes.EMAIL_SIGN_IN_START,
            payload: emailAndPassword
})


export const checkUserSession = () => ({
            type: userActionTypes.CHECK_USER_SESSION
})

//signout

export const signOutStart = () => ({
            type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
            type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
            type: userActionTypes.SIGN_OUT_FAILURE,
            payload: error
})


export const signUpStart = (userCredential) => ({
            type: userActionTypes.SIGN_UP_START,
            payload: userCredential
})

export const signUpSuccess = () => ({
            type: userActionTypes.SIGN_UP_SUCCESS
})

export const signUpFailure = (error) => ({
            type: userActionTypes.SIGN_UP_FAILURE,
            payload: error
})

