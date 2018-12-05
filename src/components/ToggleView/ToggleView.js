import React from 'react';

// styles
import btnStyles from './../../styles/button.module.css';

const ToggleView = ({ view, toggleView }) => {
  return (
    <div>

      <button
        className={btnStyles.toggleBtn}
        onClick={toggleView}
      >
      Change to {view} view
      </button>
    </div>
  )
}

export default ToggleView;
