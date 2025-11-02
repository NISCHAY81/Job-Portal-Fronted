import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  // If user is already logged in → redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  // If user not logged in → allow access
  return children;
};

export default PublicRoute;
