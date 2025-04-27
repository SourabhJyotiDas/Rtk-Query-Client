import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

// import Firebase Configs
import { auth } from "./firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// import Pages
import EditNote from "./Components/EditNote";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register.jsx";
// Import Css
import "./App.css";
import ResetPassword from "./Components/ResetPassword.jsx";
import UpdatePassword from "./Components/UpdatePassword.jsx";
import Verification from "./Components/Verification.jsx";
import PhoneVerification from "./Components/PhoneVerification.jsx";



function App() {

  const [isAuthentication, setIsAuthentication] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      console.log(data);
      setIsAuthentication(data)
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/password/reset" element={<ResetPassword />} />
          <Route path="/password/update" element={<UpdatePassword />} />
          <Route path="/email/verification" element={<Verification />} />
          <Route path="/phone/verification" element={<PhoneVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthentication ? <Homepage /> : <Login />} />
          <Route path="/note/:id" element={isAuthentication ? <EditNote /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
