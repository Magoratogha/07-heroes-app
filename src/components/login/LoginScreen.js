import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

function LoginScreen() {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Magora'
            }
        });
        const lastPath = localStorage.getItem('lastPath') || '/marvel';
        navigate(lastPath, { replace: true });
    };

    return (
        <div className="container mt-5">
            <h1 className="display-6">Login Screen</h1>
            <hr></hr>
            <button 
                onClick={ handleLogin }
                className="btn btn-outline-dark">
                    Login
            </button>
        </div>
    );
}

export default LoginScreen;