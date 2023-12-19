import React from "react";

function NotButton({ id, onArchive, isArchived }) {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)}>{isArchived ? 'Pindahkan' : 'Arsipkan'}</button>
}

export default NotButton;