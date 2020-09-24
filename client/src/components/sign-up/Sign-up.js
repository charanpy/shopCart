import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action'
import './sign-up.scss';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {

            const [userCredential, setCredential] = useState({
                        displayName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
            })

            const { displayName, email, password, confirmPassword } = userCredential;

            const handleSubmit = async event => {
                        event.preventDefault();

                        if (password !== confirmPassword) {
                                    alert("passwords don't match");
                                    return;
                        }
                        try {

                                    signUpStart(email, password, displayName)
                                    setCredential({
                                                displayName: '',
                                                email: '',
                                                password: '',
                                                confirmPassword: ''
                                    })
                        } catch (e) { console.error(e) }

            }
            const handleChange = event => {
                        const { name, value } = event.target;

                        setCredential({ ...userCredential, [name]: value });
            };


            return (
                        <div className='sign-up'>
                                    <h2 className='title'>I do not have a account</h2>
                                    <span>Sign up with your email and password</span>
                                    <form className='sign-up-form' onSubmit={handleSubmit}>
                                                <FormInput
                                                            type='text'
                                                            name='displayName'
                                                            value={displayName}
                                                            onChange={handleChange}
                                                            label='Display Name'
                                                            required
                                                />
                                                <FormInput
                                                            type='email'
                                                            name='email'
                                                            value={email}
                                                            onChange={handleChange}
                                                            label='Email'
                                                            required
                                                />
                                                <FormInput
                                                            type='password'
                                                            name='password'
                                                            value={password}
                                                            onChange={handleChange}
                                                            label='Password'
                                                            required
                                                />
                                                <FormInput
                                                            type='password'
                                                            name='confirmPassword'
                                                            value={confirmPassword}
                                                            onChange={handleChange}
                                                            label='Confirm Password'
                                                            required
                                                />
                                                <CustomButton type='submit'>SIGN UP</CustomButton>
                                    </form>
                        </div>
            );
}

const mapDispatchToProps = (dispatch) => ({
            signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName })),
})
export default connect(null, mapDispatchToProps)(SignUp);