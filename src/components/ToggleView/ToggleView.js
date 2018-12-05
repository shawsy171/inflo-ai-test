import React from 'react';
import btnStyles from './../../styles/button.module.css';

const ToggleView = ({ view, toggleView }) => {
  return (
    <div>
      <button
        className={btnStyles.toggleBtn}
        onClick={toggleView}
      >
        {view}
      </button>
    </div>
  )
}

export default ToggleView;
