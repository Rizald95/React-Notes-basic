import React from "react";
import DeleteButton from "./DeleteButton";
import NotButton from "./NotButton";

function NoteItemBody({ title, body }) {
    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">Selasa, 23 Agustus 2022</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemBody;