import React from "react";
import { BrowserRouter } from "react-router-dom";
import AdminLayout from "./admin-layout/AdminLayout";
import GeneralLayout from "./general-layout/GeneralLayout";

export default function Router() {
  const defaultRoute = false; // false => admin, true => general page
  return <BrowserRouter>{defaultRoute ? <GeneralLayout /> : <AdminLayout />}</BrowserRouter>;
}
