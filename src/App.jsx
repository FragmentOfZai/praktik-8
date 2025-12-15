import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;