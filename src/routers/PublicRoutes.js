import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

function PublicRoutes({ children }) {

    const { user } = useContext(AuthContext);

    return user.logged ? <Navigate to="/marvel"/> : children;
}

export default PublicRoutes;