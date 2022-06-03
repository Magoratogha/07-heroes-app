import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } /> 
                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>
                } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;