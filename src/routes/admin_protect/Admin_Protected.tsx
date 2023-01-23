import React from "react";

type Admin_Protected_Type = {
  children?: React.ReactNode;
};

const Admin_Protected: React.FC<Admin_Protected_Type> = ({ children }) => {
  return <>{children}</>;
};

export default Admin_Protected;
