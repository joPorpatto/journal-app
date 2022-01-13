import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import {types} from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { noteLogout } from './notes';




export const startLoginEmailPassw = (email, password) => {
        
        //el dispatch viene de thunk
        return (dispatch) =>{
                dispatch(startLoading()) ///dispara bloqueo
                
                const auth = getAuth();
                signInWithEmailAndPassword(auth,email,password )
                .then(  ({user}) => {
                        dispatch(
                                login(user.uid, user.displayName  )
                                );
                                dispatch(finishLoading());
                                
                        })
                        
                        .catch((err)=> {
                                dispatch(finishLoading());
                                Swal.fire('Error', err.message, 'error')
                                
                                
                        });

                       
        }

                
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
        //     .then(user =>{
        //         dispatch(login(user))
        //     });
    }
}

/////////////////////////////////////////
export const startRegisterWithEmailPasswordName = (email,password,name) =>{
        return ( dispatch ) => {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth,email,password )
                .then( async ({user}) => {
                        await updateProfile(user,{displayName:name})
                        dispatch( login(user.uid, user.displayName  )
                        )
                        
                })
                .catch((err)=> 
                        //
                        
                        Swal.fire('Error', err.message, 'error')
                        )

        }
}
export const login = (uid,displayName) => {
        return{
                type: types.login,
                payload: {
                        uid,
                        displayName
                }
        }
}

export const startLogout = () => {
        return async (dispatch) => {     
                const auth = getAuth();
                await auth.signOut();        
                dispatch( logout() );
                dispatch(noteLogout() );
        }
};

export const logout = () =>({
        type: types.logout

})