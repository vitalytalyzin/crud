import React, { Component } from 'react';
import './App.css';
import NoteForm from './components/NoteForm/NoteForm';
import Note from './components/Note/Note';

class App extends Component {

  state = {
    notes: [],
  };

  loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.json())
      .then(notes => this.setState({ notes }));
  };

  sendNote = async (note) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 0, content: note }),
    };

    await fetch(process.env.REACT_APP_NOTES_URL, requestOptions);
    this.loadNotes();
  };

  deleteNote = async (id) => {
    await fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
      method: 'DELETE',
    });
    this.loadNotes();
  };

  componentDidMount() {
    this.loadNotes();
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <div className="header">
          <h1>Notes</h1>
          <button
            className="refreshButton"
            onClick={this.loadNotes}
          >Refresh</button>
        </div>
        {notes.length > 0 && (
          <div className="noteSection">
            {notes.map(item => (
              <Note
                key={item.id}
                note={item.content}
                onRemove={() => this.deleteNote(item.id)}
              />
            ))}
          </div>
        )}
        <NoteForm
          onNoteAdded={this.sendNote}
        />
      </>
    );
  }
}

export default App;
