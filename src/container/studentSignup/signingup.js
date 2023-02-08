import React, { useState } from "react";
import Signup from "../../components/signup";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import * as ROUTES from "../../constants/routes";

const SignupContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign in successful
        navigate(ROUTES.SIGN_IN);
        console.log(`Successfully signed in with email: ${email}`);
      })
      .catch((error) => {
        // Handle sign-in error
        setErrorMessage(error.message);
        console.error(error);
      });
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // Sign-in successful
        navigate(ROUTES.SIGN_IN);
        console.log(`Successfully signed in with Google: ${result.user.email}`);
      })
      .catch((error) => {
        // Handle sign-in error
        setErrorMessage(error.message);
        console.error(error);
      });
  };

  return (
    <Signup>
      <Signup.SubContainer>
        <Signup.Headline>Welcome You</Signup.Headline>
        <Signup.Img order="8" src="images/icons/thunder-icon.svg" />
        {errorMessage && (
          <Signup.MessageContainer colorCode="#D43260">
            <Signup.MessageText>{errorMessage}</Signup.MessageText>
          </Signup.MessageContainer>
        )}
        <Signup.Div>
          <Signup.Label htmlFor="name" order="1">
            Name
          </Signup.Label>
          <Signup.Input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
            order="1"
          />
        </Signup.Div>
        <Signup.Div>
          <Signup.Label htmlFor="email" order="2">
            Email Address
          </Signup.Label>
          <Signup.Input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(event) => setEmail(event.target.value)}
            order="3"
          />
        </Signup.Div>
        <Signup.Div>
          <Signup.Label order="4">Password</Signup.Label>
          <Signup.Input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
            order="5"
          />
        </Signup.Div>
        <Signup.Button
          order="6"
          type="submit"
          disabled={!name || !email || !password}
          onClick={handleSubmit}
        >
          Sign Up
        </Signup.Button>
        <Signup.SignDiv>
          <Signup.Line1>
            <hr />
          </Signup.Line1>
          <Signup.OrText>or</Signup.OrText>
          <Signup.Line2>
            <hr />
          </Signup.Line2>
        </Signup.SignDiv>
        <Signup.Button
          onClick={handleGoogleSignIn}
          style={{
            background: "white",
            color: "black",
            border: "1px solid black",
          }}
        >
          <Signup.GoogleSignin>
            <Signup.Image
              src="images/icons/google.png"
              alt="google-icon"
            ></Signup.Image>
            <Signup.Text> Sign Up with Google</Signup.Text>
          </Signup.GoogleSignin>
        </Signup.Button>
        <Signup.Link order="7" to={ROUTES.HOME}>
          Cancel return to website{" "}
        </Signup.Link>
      </Signup.SubContainer>
    </Signup>
  );
};

export default SignupContainer;
