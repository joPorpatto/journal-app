import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';



//sirve parar aplicar diferentes middlewares
const composeEnhancers = (
        typeof window !== 'undefined' 
        && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ) 
        || compose;


//todos los reducers van acá ( ver carpeta actions)
const reducers = combineReducers({
        auth: authReducer,
        ui: uiReducer,
        notes: notesReducer
})

export const store = createStore(
        reducers,
        composeEnhancers(
                applyMiddleware(thunk)
        )
        )