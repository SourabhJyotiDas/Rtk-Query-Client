import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register.jsx";
import { useLoadUserQuery } from "./redux/api";
import EditNote from "./Components/EditNote";

function App() {

  const { data } = useLoadUserQuery();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={data && data.user ? <Homepage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
