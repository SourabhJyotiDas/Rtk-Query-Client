import React, { useState } from "react";
import { doPasswordChange } from "../firebase/auth";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doPasswordChange(password);
      // console.log(result);
      console.log("Password set Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            New Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Password
        </button>
      </form>
    </>
  );
}
