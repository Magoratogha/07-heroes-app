import { queryByAttribute, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe('Test on <SearchScreen />', () => { 

    const user = userEvent.setup()
    
    it('should render correctly', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Type something in the search box to search for a hero.', { selector: 'div' }))
            .toBeInTheDocument();
    });

    it('should render batman card and fill the input with the queryString', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>);
        expect(screen.getByText('Batman', { selector: 'h5' })).toBeInTheDocument();
        expect(queryByAttribute('class', container, 'form-control')).toHaveValue('batman');
    });

    it('should render alert when the queryString is invalid', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=123']}>
                <SearchScreen />
            </MemoryRouter>);
        expect(screen.getByText('No results found.', { selector: 'div' })).toBeInTheDocument();
    });

    it('should call handleSubmit when the form is submitted', async() => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>);
        const input = screen.getByPlaceholderText('Type something...', { exact: true });
        await user.type(input, 'batman');
        await user.keyboard('{enter}');
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    });
});