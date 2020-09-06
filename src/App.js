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

  componentDidMount() {
    this.loadNotes();
  }

  render() {
    const { notes } = this.state;

    return (
      <div>
        <h1>Notes</h1>
        {notes.length > 0 && (
          <div className="noteSection">
            {notes.map(item => (
              <Note key={item.id} note={item.content} />
            ))}
          </div>
        )}
        <NoteForm
          onNoteAdded={this.sendNote}
        />
      </div>
    );
  }
}

export default App;
