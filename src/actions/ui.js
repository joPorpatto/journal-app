import { types } from '../types/types';

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

//estas  acciones sirven para bloquear y desbloquear el boton de login 
export const startLoading = () => ({
    type: types.uiStartLoading
})
export const finishLoading = () => ({
    type: types.uiFinishLoading
})

 