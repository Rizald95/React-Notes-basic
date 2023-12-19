import React from "react";

function NoteSearch({ search, onSearch }) {
    return (
        <div className="note-search">
            <input type='text' placeholder='Search Note' value={search} onChange={onSearch} />
        </div>
    )
}

export default NoteSearch;