import React, { useEffect } from 'react';

export function Thought(props) {
  // Destructure props for easier access
  const { thought, removeThought } = props;

  // Set up useEffect to remove thought after expiration time
  useEffect(() => {
    // Calculate time remaining until thought expires
    const timeRemaining = thought.expiresAt - Date.now();
    
    // Set a timeout to remove the thought after the calculated time
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    // Cleanup function to clear the timeout on component unmount or update
    return () => {
      clearTimeout(timeout);
    };
  }, [thought]);

  // Event handler for removing thought on button click
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  // Render individual thought
  return (
    <li className="Thought">
      {/* Button to remove thought */}
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      
      {/* Display thought text */}
      <div className="text">{thought.text}</div>
    </li>
  );
}

