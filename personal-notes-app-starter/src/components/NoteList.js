import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}){
    if (notes.length === 0)  {
       return <p className="note-list__empty=message">Belum Ada Catatan</p>
    }

    return(   

        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    {...note}/>
                ))
            }
        </div>
    )


}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete : PropTypes.func.isRequired,
}

export default NoteList;