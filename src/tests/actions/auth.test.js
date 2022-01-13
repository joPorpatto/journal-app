
     /**
     * @jest-environment node
     */

    
import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas acciones auth', () => {
        test('should login and logout', () => {

                const uid = "ABC123";
                const  displayName ="jo";
                const loginAction = login(uid,displayName)
                const logoutAction = logout();

                expect(loginAction).toEqual({
                        type: types.login,
                        payload: {
                                uid,
                                displayName
                        }

                });
                expect(logoutAction).toEqual({
                        type: types.logout
                })
        
        
        })
        
})
