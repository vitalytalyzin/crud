import React from 'react';
import styled from './Note.module.css';
import PropTypes from 'prop-types';

const Note = ({ note, onRemove }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.note}>
        {note}
      </div>
      <button
        className={styled.button}
        onClick={onRemove}
      >Remove</button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.string,
  onRemove: PropTypes.func,
};

export default Note;
