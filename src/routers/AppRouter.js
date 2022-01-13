import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';

import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';
// import { PrivateRoute } from './PrivateRoute';

// import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {

        const dispatch = useDispatch()
        const [checking, setChecking] = useState(true);
        const [IsLogginIn, SetIsLogginIn] = useState(false)

        //para ver si esta loge
        useEffect(() => {
                const auth = getAuth();
                onAuthStateChanged(auth,  async (user) =>{
                        //si user tiene algo sigue
                        if (user?.uid) {
                                dispatch(login(user.uid, user.displayName));
                                SetIsLogginIn(true)
                                dispatch(startLoadingNotes(user.uid))
                        }else {
                                
                                SetIsLogginIn(false)
                        }
                        setChecking(false);

                })
               
        }, [dispatch,setChecking ] )

        if (checking) {  
                return(
                        <h1>Waiting data....</h1>
                )
                
        }


         return (

                <Router>
                        <div>
                                <Routes>
                                        {/* privada - Journal */}
                                        <Route
                                                path='/*'
                                                element={<PrivateRoute 
                                                                        isAuthenticated={IsLogginIn}
                                                                        element={<JournalScreen/>}
                                                                />}
                                        />
                                        {/* PUBLICA - auth */}
                                        <Route
                                              
                                                path='/auth/*'
                                                element={<PublicRoute 
                                                                        isAuthenticated={IsLogginIn}
                                                                        element={<AuthRouter/>}
                                                                />}
                                        />
                                        
                                        < Route
                                                path="/*"
                                                element={< Navigate to ="/auth/login" />}/>

                        
                                </Routes>

                        </div>
                </Router>



                // <Router>
                //         <Routes>
                //                 {IsLogginIn 
                //                 ?
                //                 <Route
                //                         //isAuthenticated= {IsLogginIn}
                //                         path='/'
                //                         element={<JournalScreen />}
                //                 />
                //                 :
                //                 <Route
                //                         path='/'
                //                         element={<Navigate replace to='auth/login'/>}
                //                 />
                //                 }
                //                 <Route
                //                 path='auth/*'
                //                 element={<AuthRouter/>}
                //                 />
                
                
                //         </Routes>
                // </Router>
    )
}
