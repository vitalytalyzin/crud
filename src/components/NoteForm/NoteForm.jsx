import React, { Component } from 'react';
import styled from './NoteForm.module.css';

class NoteForm extends Component {

  state = {
    value: '',
  };

  onChange = ({ target }) => {
    this.setState({ value: target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value) {
      this.props.onNoteAdded(value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label className={styled.wrapper}>
          New Note
          <textarea
            onChange={this.onChange}
            value={this.state.value}
            placeholder="Note something"
            rows={10}
            cols={45}
          >
          </textarea>
        </label>
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
};

export default NoteForm;
