import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, SignUp, Admin, Profile } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
