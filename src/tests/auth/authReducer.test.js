import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test on authReducer.js', () => {

    it('should return the default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    it('should return the state with the name property setted properly', () => {
        const action = { type: types.login, payload: { name: 'test' } };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'test' });
    });

    it('should return the state with the logged property setted in false', () => {
        const action = { type: types.logout };
        const state = authReducer({ logged: true, name: 'Test' }, action);
        expect(state).toEqual({ logged: false });
    });
})