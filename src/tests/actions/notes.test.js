     /**
     * @jest-environment node
     */


import { types } from "../../types/types";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk' 
import { startNewNote } from '../../actions/notes';

import { deleteDoc } from "firebase/firestore";
import { db, doc } from "../../firebase/firebaseConfig";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
        auth:{
                uid: "TESTING",

        }
})

describe("Pruebas con las acciones de notes",() =>{
        test('should  create a new note', async() => {
                await store.dispatch(startNewNote());

                const actions = store.getActions();
                console.log(actions)

                expect( actions[0]).toEqual({
                        type: types.notesActive,
                       payload: {
                                id: expect.any(String),
                                title: '',
                                body: '',
                                date: expect.any(Number)
                        }
                })

                  expect( actions[1]).toEqual({
                        type: types.notesAddNew,
                       payload: {
                                id: expect.any(String),
                                title: '',
                                body: '',
                                date: expect.any(Number)
                        }
                })

                const docId= (actions[0].payload.id)
                const noteRef = doc(db, `/TESTING/journal/notes/${docId}`);
                await deleteDoc(noteRef);
        
                 



        })
        
})