import React from "react";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
import { doSignInWithEmailAndPassword, doSignOut } from "../firebase/auth";

export default function Navbar() {
  const auth = getAuth(app);

  const loginHandler = () => {
    const googleProvider = new GoogleAuthProvider();
    doSignInWithEmailAndPassword();
    signInWithPopup(auth, googleProvider);
  };

  const logOutHandler = () => {
    doSignOut();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            RTK Query
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/password/reset">
                  Forgot Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/password/update">
                  Update Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/email/verification">
                  Email Verification
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/phone/verification">
                  Phone Verification
                </Link>
              </li>
              <li className="nav-item mx-5">
                <button
                  className="btn btn-outline-danger"
                  onClick={logOutHandler}>
                  Logout
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
