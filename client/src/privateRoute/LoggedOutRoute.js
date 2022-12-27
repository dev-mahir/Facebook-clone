import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


// public access 

const LoggedOutRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  
  return isLoggedIn ? <Navigate to="/" /> : <Outlet /> ;
};

export default LoggedOutRoute;
