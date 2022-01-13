
import { types } from "../../types/types";
import { authReducer } from "../../reducers/authReducer";



describe("Prueba", () =>{
        test('should login', () => {

                const initState = {};
                const action= {
                        type: types.login,
                        payload: {
                                uid: 'abc',
                                displayName: 'Joel'
                        }
                };
                const state = authReducer(initState,action);
                expect(state).toEqual({
                        
                        uid: "abc",
                        name: "Joel"
                }
                )
        })
         test('should logout', () => {

                const initState = {
                        uid: "joesdesf",
                        name:"Joel"
                };
                const action= {
                        type: types.logout,
                       
                };
                const state = authReducer(initState,action);
                expect(state).toEqual({}
                )
        })
        test('should logout', () => {

                const initState = {
                        uid: "joesdesf",
                        name:"Joel"
                };
                const action= {
                        type: types.logoulñlñlt,
                       
                };
                const state = authReducer(initState,action);
                expect(state).toEqual(initState
                )
        })
})