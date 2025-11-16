import {  Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import InvoiceList from "../pages/Invoice/InvoiceMUIGrid";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
function AppRoutes() {
  return (
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/invoice/list" element={<ProtectedRoute><InvoiceList /></ProtectedRoute>} />
        <Route path="/dashboard" element={ 
            <ProtectedRoute>
                <Dashboard />
                </ProtectedRoute>
            } />

        {/* 404 Page */}
        <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
      </Routes>
  );
}

export default AppRoutes;
