import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// auth reject  -- login na thakle
const AuthRedirect = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
     return isLoggedIn ? children : <Navigate to="/login" />;
};

export default AuthRedirect;
