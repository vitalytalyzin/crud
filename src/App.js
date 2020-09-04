import React, { Component } from 'react';
import './App.css';
import NoteForm from './components/NoteForm/NoteForm';
import Note from './components/Note/Note';

class App extends Component {

  state = {
    id: null,
    content: '',
  };

  onNoteAdded = (note) => {
    this.setState({ id: 0, content: note});
  };

  loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.json())
      .then(notes => notes);
  };

  componentDidMount() {
    this.loadNotes();
  }

  render() {
    const { content } = this.state;

    return (
      <div>
        <h1>Notes</h1>
        {content && (
          <div className="noteSection">
            <Note note={content} />
          </div>
        )}
        <NoteForm
          onNoteAdded={this.onNoteAdded}
        />
      </div>
    );
  }
}

export default App;
