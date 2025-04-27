import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signUpUserHandle = async (e) => {
    e.preventDefault();
    try {
      let result = await doCreateUserWithEmailAndPassword(email, password);
      console.log(result.user);
      if (result && result.user) {
        let newUser = {
          name: name,
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
      <form className="container my-5" onSubmit={signUpUserHandle}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </>
  );
}
