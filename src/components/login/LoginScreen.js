import { useNavigate } from "react-router-dom";

function LoginScreen() {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', { replace: true });
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