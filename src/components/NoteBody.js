import React from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/index'
import NoteHeader from "./NoteHeader";

class NoteBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onSearch = this.onSearch.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note);
        this.setState({ notes });
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearch(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    render() {

        const RegistNotes = this.state.notes.filter((note) => {
            return note.archived === false;
        });
        const archivedNotes = this.state.notes.filter((note) => {
            return note.archived === true;
        })
        return (
            <div>

                <div className="note-app__body" >
                    <NoteForm addNotes={this.onAddNotesHandler} />
                    <h2>Active Note</h2>
                    <NoteList notes={RegistNotes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsip</h2>
                    <NoteList notes={archivedNotes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        )
    }
}

export default NoteBody;