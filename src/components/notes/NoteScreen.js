import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {


        const dispatch = useDispatch()
        const {active} = useSelector(state => state.notes)

        const [formValues, handleInputChange,reset] =useForm( active);
        const {body, title, id} = formValues;
        //useForm va a manejar el estado y sus cambios
        //pero no va a mostrar por pantallas si se selecciona nueva nota 
        // se altera el reset del useForm para que no explote*


        const activeId = useRef(active.id)

        //* esto hace que cambie la  nota seleccionada
        useEffect( ( ) => {
                if (active.id !== activeId.current) {
                        reset(active);
                        activeId.current = active.id //evita el ciclo infinito
                }                 
        }, [active,reset])


        //hace que cualquier modificacion en la caja de texto cambie el state activo
        useEffect( ( ) => {        
                dispatch(activeNote(formValues.id, {...formValues}))
        }, [formValues,dispatch])


        const handleDelete = ( ) => {
                dispatch( startDeleting( id ) );
        }


        return (
                <div className="notes__main-content">
                        
                        <NotesAppBar />

                        <div className="notes__content">

                                <input 
                                        type="text"
                                        placeholder="Some awesome title"
                                        className="notes__title-input"
                                        autoComplete="off"
                                        name= "title"
                                        value={title}
                                        onChange={handleInputChange}
                                />

                                <textarea
                                        placeholder="What happened today"
                                        className="notes__textarea"
                                        name="body"
                                        value={body}
                                        onChange={handleInputChange}
                                ></textarea>

                                {
                                        (active.url)
                                        &&
                                        (<div className="notes__image">
                                                <img 
                                                        src={active.url}
                                                alt="imagen"
                                                />
                                        </div>)
                                }


                        </div>


                        <button
                                className="btn btn-danger"
                                onClick={handleDelete}
                                >
                                        DELETE

                        </button>

                </div>
        )
}
