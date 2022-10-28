import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

/* PURPOSE OF PRIVATE ROUTE
=============================================================
 1. Only allows authenticated user to visit the desired route
 2.
 3. Redirect the user to the route he/she wanted to visit
*/

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
