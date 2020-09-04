import React from 'react';
import styled from './Note.module.css';

const Note = ({ note }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.note}>
        {note}
      </div>
      <button className={styled.button}>Remove</button>
    </div>
  );
};

export default Note;
