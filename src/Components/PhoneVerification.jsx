import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PhoneVerification() {
  const [phNo, setPhno] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            letsonSignUp()
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };


  const letsonSignUp = () => {
    setLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, "+916002218998", appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="recaptcha-container"></div>
      {showOtp ? (
        <>
          <div className="row g-3 align-items-center my-3">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Enter your OTP
              </label>
            </div>
            <div className="col-auto">
              <input
                value={otp}
                onChange={(e) => setOtp(Number(e.target.value))}
                maxLength={6}
                type="number"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Must be 6 characters long.
              </span>
            </div>
          </div>
          {loading ? (
            <button className="btn btn-danger">Loading....</button>
          ) : (
            <button className="btn btn-danger">Submit OTP</button>
          )}
        </>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number
            </label>
            <input
              value={phNo}
              onChange={(e) => {
                setPhno(e.target.value);
              }}
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button onClick={letsonSignUp} className="btn btn-primary">
            Send Code To your Number
          </button>
        </>
      )}
    </>
  );
}
