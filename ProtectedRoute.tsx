import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRoute = {
  children?: React.ReactNode;
};

const ProtectedRoute = (props: ProtectedRoute) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/auth/login");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <Fragment>{isLoggedIn ? props.children : null}</Fragment>;
};

export default ProtectedRoute;
