import React from "react";
import DeleteButton from "./DeleteButton";
import NotButton from "./NotButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ title, body, id, onDelete, onArchive, isArchived }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} body={body} />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <NotButton id={id} onArchive={onArchive} isArchived={isArchived} />
            </div>
        </div>
    )
}

export default NoteItem;