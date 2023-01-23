import React from "react";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Navbar from "./../../components/Navbar/Navbar";
import RoutesList from "../../routes/RoutesList";
import User_header from "../user/User_header/User_header";

const Layout: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <User_header />
      <RoutesList />
    </div>
  );
};

export default Layout;
