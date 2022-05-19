import React from "react";
import { Routes, Route } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard.js";
import Products from "../views/admin/Products.js";
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
          {/* <Dashboard/> */}
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/tables" element={<Tables/>}></Route>
          </Routes>
          <FooterAdmin/>
        </div>
      </div>
    </>
  );
}

export default Admin