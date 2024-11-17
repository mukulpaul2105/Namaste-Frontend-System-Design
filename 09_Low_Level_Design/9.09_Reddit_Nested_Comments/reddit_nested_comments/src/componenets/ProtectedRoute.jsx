import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
   const isAuthenticated = true;
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  )
}

//? Outlet is the place where the children can render

export default ProtectedRoute