import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard.js";
import Maps from "../views/admin/Maps.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";

function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
            <Route path="/admin/maps" element={<Maps/>}></Route>
            <Route path="/admin/settings" element={<Settings/>}></Route>
            <Route path="/admin/tables" element={<Tables/>}></Route>
            <Route path="/admin" element={<Dashboard/>}></Route>
          </Routes>
          {/* <Navigate from="/admin" to="/admin/dashboard"/> */}
        </div>
         <FooterAdmin /> 
      </div>
    </>
  );
}

export default Admin