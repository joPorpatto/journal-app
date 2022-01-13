import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import {  startGoogleLogin, startLoginEmailPassw } from '../../actions/auth';

export const LoginScreen = () => {

        const dispatch = useDispatch()
        
        //solo lo uso para poder bloquear boton
        const {loading} = useSelector(state => state.ui)

        //SE HACE PARA RELLENAR DATOS 
        const [ formValues, handleInputChange ] = useForm({
                email: 'jojo@gmail.com',
                password: '123456'
        })

        //SE DESTRUCTURAN LOS DATOS
        const { email, password } = formValues;

        //DESPACHA A LA BASE DE DATOS FIREBASE
        const handleSubmit = (e) => {
                e.preventDefault();
                dispatch(startLoginEmailPassw(email,password))


        }
        //SE DESPACHA LA AUTENTICACION DE GOOGLE
        const handleGoogleLogin = () => {
                dispatch( startGoogleLogin());
        }


        return (
                <div className="animate__animated animate__fadeIn">
                        <h3 className="auth__title" >Login </h3>
                        <form onSubmit={handleSubmit}>
                                
                                <input 
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        className="auth__input"
                                        autoComplete="off"
                                        value={email}
                                        onChange={ handleInputChange}

                                        />

                                <input 
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        className="auth__input"
                                        value = {password}
                                        onChange={ handleInputChange}



                                
                                />

                                <button
                                        type= "submit"
                                        className="btn btn-primary btn-block"
                                        disabled={ loading }
                                        //login está cargando -BLOQUEADO

                                >
                                        Login
                                </button>


                                <hr/>
                                <div className="auth__social-networks">
                                        <p>Login  whit social networks</p>
                                        <div 
                                                className="google-btn"
                                                onClick={handleGoogleLogin}
                                                >
                                                <div className="google-icon-wrapper">
                                                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                                </div>
                                                <p className="btn-text">
                                                        <b>Sign in with google</b>
                                                </p>
                                                </div>
                                </div>

                                <Link 
                                        to="/auth/register"
                                        className="link"
                                        > Create  new account
                                </Link>        
                        </form>

                </div>


    )
}
