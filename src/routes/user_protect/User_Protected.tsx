import React from "react";

type User_Protected_Type = {
  children?: React.ReactNode;
};

const User_Protected: React.FC<User_Protected_Type> = ({ children }) => {
  return <>{children}</>;
};

export default User_Protected;
