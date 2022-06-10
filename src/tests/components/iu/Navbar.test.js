import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { AuthContext } from "../../../auth/authContext";
import Navbar from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate
}));

describe('Test on <Navbar />', () => {

    const user = userEvent.setup();

    const contextValue = {
        user: {
            name: "Batman",
            isLogged: true
        },
        dispatch: jest.fn()
    }

    it('should render properly', () => {
        const { container } = render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Batman', { selector: 'span' })).toBeInTheDocument();
    });

    it('should call navigate and dispatch functions when user logout', async() => {
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        const logoutButton = screen.getByText('Logout', { selector: 'button' });
        await user.click(logoutButton);
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
    });
});