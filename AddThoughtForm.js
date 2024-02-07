import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  // State for managing the text input
  const [text, setText] = useState("");

  // Update text state as the user types
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if text is not empty before adding a new thought
    if (text.length > 0) {
      // Create a new thought with unique ID, text, and expiration time
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };

      // Add the new thought using the prop function
      props.addThought(thought);

      // Reset text input after submission
      setText("");
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      {/* Input field for thought text */}
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      
      {/* Submit button */}
      <input type="submit" value="Add" />
    </form>
  );
}

