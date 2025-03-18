import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Userdashboard from "./pages/Userdashboard";
import Privateroute from "./components/Privateroute";
import UserInfo from "./components/UserInfo";




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />

{/* Private Route */}
        <Route path="/private" element={<Privateroute />}>

        <Route path="userdashboard" element={<Userdashboard />} />
        <Route path="userinfo" element={<UserInfo />} />

        </Route>

{/* Private Route */}
        
      
      </Routes>
    </div>
  );
};

export default App;