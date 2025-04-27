import React, { useState } from "react";
import { doPasswordReset } from "../firebase/auth";

export default function ResetPassword() {
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doPasswordReset(email);
      console.log("Email Send Successfully");
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

        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
      </form>
    </>
  );
}
