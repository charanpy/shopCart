import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
//import { auth } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredential, setCredentail] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredential;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSigninStart(email, password);
    setCredentail({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentail({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit" > Sign in </CustomButton>
          <CustomButton type="button" onClick={googleSigninStart}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
