import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.onSearch = this.onSearch.bind(this);

    }

    onSearch(event) {
        this.setState(() => {
            return {
                search: event.target.value,
            }
        })
    }

    render() {
        return (
            <>
                <NoteBody />
            </>
        )
    }

}

export default NoteApp;