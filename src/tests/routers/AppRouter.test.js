import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe('Test on <AppRouter />', () => {
    
    const contextValue = {
        user: {
            logged: false
        }
    };

    it('should render LoginScreen if user is not authenticated', () => {
        const { container } = render(<AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Login Screen', { selector: 'h1' })).toBeInTheDocument();
    });
});