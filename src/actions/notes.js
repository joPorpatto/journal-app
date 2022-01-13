import { deleteDoc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db, doc, setDoc, collection } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";




export const startNewNote = () => {
        return async ( dispatch, getState ) => {

                //obtenemos el state - simil useSelector
                const uid = getState().auth.uid;
                console.log(uid)

                const newNote = {
                        title: '',
                        body: '',
                        date: new Date().getTime()
                }

                const ref = doc(collection(db, `${uid}/journal/notes`));
                await setDoc(ref, newNote);

                dispatch(activeNote(ref.id,newNote))
                dispatch(addNewNote(ref.id, newNote))
                
        }

}


export const activeNote = (id,note) =>( {
        type: types.notesActive,
        payload: {
                id,
                ...note
        }
});

export  const addNewNote = (id,note) => ({
        type: types.notesAddNew,
        payload: {
                id, 
                ...note
        }
})


export const startLoadingNotes = ( uid ) => {
        return async( dispatch ) => {
        
                const notes = await loadNotes( uid );
                dispatch( setNotes( notes ) );

        }
}
export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});




export const refreshNote = ( id, note ) => ({
        type: types.notesUpdated,
        payload: {
                id,
                note: {
                        id,
                        ...note
                }
        }
});


export const startUploading = (file) => {
        return async(dispatch,getState) =>{
                const {active}  = getState().notes; 
                
                Swal.fire({
                        title: 'Uploading...',
                        text: 'Please wait...',
                        allowOutsideClick: false,
                        onBeforeOpen: () => {
                                Swal.showLoading();
                        }
        });
                
                const fileUrl = await fileUpload(file);
                active.url = fileUrl

                //llevar a database firebase
                dispatch(startSaveNote(active))              
                
                Swal.close();
        }
}

export const startSaveNote = (note) => {
        return async(dispatch,getState) => {
                const {uid} = getState().auth
                
                //si hay algo que es undefined, larga err
                if(!note.url){
                        delete note.url
                }
                //se usa .. para separar la note
                const noteToFirestore = {...note}
                //eliminamos id del objeto
                delete noteToFirestore.id

                //link de database - firestore
                const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
                await updateDoc(noteRef,noteToFirestore);
                

                //la idea del refresh esque se actualice solo la nota que cambia y no todas las notas
                dispatch( refreshNote( note.id, note ) );    
                Swal.fire('Saved', note.title, 'success');

                 
        }
}

export const startDeleting = (id)=>{
        return async(dispatch, getState) => {

                const uid = getState().auth.uid;
                const noteRef = doc(db, `${uid}/journal/notes/${id}`)
                await deleteDoc(noteRef);
                
                //borra el store
                dispatch(deleteNote(id));
}}





//acciones que modifican el store
export const deleteNote = (id) =>({
        type: types.notesDelete,
        payload: id
})

export const noteLogout = () => ({
        type: types.notesLogoutCleaning,

});
