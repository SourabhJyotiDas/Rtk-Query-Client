import React, { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const googleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await doSignInWithGoogle();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await doSignInWithEmailAndPassword(email, password);
      // console.log(result);
      if (result && result.user) {
        let newUser = {
          email: result.user.email,
          password: password,
        };
        console.log("my new User is ", newUser);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login Manually
        </button>
      </form>
      <button onClick={googleLogin} className="btn btn-primary">
        SignIn With Google
      </button>
    </>
  );
}
