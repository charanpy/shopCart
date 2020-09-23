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
