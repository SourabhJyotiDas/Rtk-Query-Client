import React from "react";
import { doSendEmailVerification } from "../firebase/auth";

export default function Verification() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doSendEmailVerification();
      // console.log(result);
      console.log("Check Email for verifiation");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary">
          Lets Email Verify
        </button>
      </form>
    </>
  );
}
