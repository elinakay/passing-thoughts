import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  // State to manage the list of thoughts
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  function addThought(thought) {
    // Use functional update to preserve the previous state
    setThoughts(() => [thought, ...thoughts]);
  }

  function removeThought(thoughtIdToRemove) {
    // Use functional update to ensure correct state transition
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  }

  return (
    <div className="App">
      {/* Header section */}
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      {/* Main content section */}
      <main>
        {/* Form to add new thoughts */}
        <AddThoughtForm addThought={addThought} />
        {/* List of thoughts */}
        <ul className="thoughts">
          {thoughts.map((thought) => (
            // Render individual thought components with unique key and remove function
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

