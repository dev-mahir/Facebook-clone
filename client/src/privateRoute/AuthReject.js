import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'



// auth reject  -- login na thakle
const AuthReject = ({ children}) => {
     const { isLoggedIn } = useSelector((state) => state.auth);
     
     return  isLoggedIn ?  <Navigate to="/" /> : children

};

export default AuthReject;
