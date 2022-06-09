import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe('Test on <AppRouter />', () => {
    
    it('should render LoginScreen if user is not authenticated', () => {
        const contextValue = {
            user: {
                logged: false
            }
        };
        
        const { container } = render(<AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Login Screen', { selector: 'h1' })).toBeInTheDocument();
    });
    
    it('should render Marvel component if user is authenticated', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Test'
            }
        };
        
        const { container } = render(<AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Marvel Screen', { selector: 'h1' })).toBeInTheDocument();
    });
    
});