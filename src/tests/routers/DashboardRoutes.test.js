import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import DashboardRoutes from "../../routers/DashboardRoutes";

describe('Test on <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            name: 'Test',
            logged: true
        }
    };

    it('should render without crashing', () => {
        const { container } = render(<AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText(contextValue.user.name, { selector: 'span' })).toBeInTheDocument();
        expect(screen.getByText('Marvel Screen', { selector: 'h1' })).toBeInTheDocument();
    });

    it('should render DC path', () => {
        const { container } = render(<AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('DC Screen', { selector: 'h1' })).toBeInTheDocument();
    });
});