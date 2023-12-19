import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charsLeft: 50,
            maxChar: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }
    onContentChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    onTitleChangeEventHandler(event) {
        const charCount = event.target.value.length;
        const maxChar = this.state.maxChar;
        const charLength = maxChar - charCount;
        this.setState(() => {
            return {
                title: event.target.value,
                charsLeft: charLength
            }
        });
    }


    render() {
        return (
            <div className='note-input'>
                <form onSubmit={this.onSubmitEventHandler}>
                    <h1 className='note-input__title'>Buat Catatan</h1>
                    <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.charsLeft}</p>
                    <div className='note-input__body'>
                        <input type="text" placeholder="Title" maxLength={this.state.maxChar}
                            required
                            onChange={this.onTitleChangeEventHandler} />
                        <br />
                        <textarea type="text" placeholder="Isi Konten" onChange={this.onContentChangeEventHandler} rows="10" cols="50" />
                        <br />
                        <button type="submit">Buat</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NoteForm;
