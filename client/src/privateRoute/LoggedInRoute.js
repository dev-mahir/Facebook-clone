import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoggedInRoute = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default LoggedInRoute;
