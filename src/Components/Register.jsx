import React, { useState } from "react";
import { useRegisterMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const naigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [register] = useRegisterMutation();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password });
    setname("");
    setemail("");
    setpassword("");
    naigate("/")
  };

  return (
    <>
      <form className="container my-5" onSubmit={handleOnSubmit}>
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
          Submit
        </button>
      </form>
    </>
  );
}
