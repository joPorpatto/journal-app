import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

        //no hace falta mandar componentes ni argunmentos
        //la info está en el store
        //asi puedo usar useSelector
        const {notes} = useSelector(state => state.notes)

    return (
        <div className="journal__entries">
                <h1>Journal entries</h1>
                <br></br>
            
            {
                notes.map( note => (
                    <JournalEntry 
                        key={ note.id } 
                        {...note}
                        />
                ))
            }

        </div>
    )
}
