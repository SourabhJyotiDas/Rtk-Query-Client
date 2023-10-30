import React, { useState } from "react";
import { useLoginMutation } from "../redux/api";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [login] = useLoginMutation();
 

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    setemail("");
    setpassword("");
  };

  return (
    <>
      <form className="container my-5" onSubmit={handleOnSubmit}>
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
          Submit
        </button>
      </form>
    </>
  );
}
