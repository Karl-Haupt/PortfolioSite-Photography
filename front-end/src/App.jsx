import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./app.css";

import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
// import RequireAuth from "./components/Layout/RequireAuth";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Gallery from "./components/Gallery/Gallery";
import ContactUs from './components/Contact/ContactUs';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import { loadUser } from "./Redux/Actions/userActions";
import store from "./store";

function App() {
  const { isAuthenticated} = useSelector(state => state.auth);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
      
        <Route path = "/" element={<Home/>} exact/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
        {/* <ProtectedRoute path="/dashboard" element={<Dashboard/>} /> */}
        {/* <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route> */}

      <Route
        path="/dashbaord"
        element={
          isAuthenticated ? (
            <Dashboard/>
          ) : (
            <Home/>
          )
        }
      />

      </Routes>
    </>
  );
}

export default App;
