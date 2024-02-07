# Passing Thoughts App

A simple React application for capturing and displaying passing thoughts with automatic expiration.

## Overview

Passing Thoughts is a minimalistic web app that allows users to add and view short-lived thoughts. Thoughts are automatically removed from the display after a set expiration time, providing a temporary space for quick notes or reflections.

## Features

- **Add Thoughts:** Use the provided form to add new thoughts to the display.
- **Automatic Expiration:** Thoughts are removed from the list after a predefined expiration time (15 seconds by default).
- **Thought Removal:** Users can manually remove thoughts by clicking the "Remove" button.

## Getting Started

1. **Clone Repository:**
   ```bash
   git clone https://github.com/elinakay/passing-thoughts.git
   cd passing-thoughts
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the App:**
   ```bash
   npm start
   ```

4. **Open in Browser:**
   Visit `http://localhost:3000` in your web browser to see the app in action.

## Usage

1. **Add a Thought:**
   - Type your passing thought in the input field and click the "Add" button.

2. **Remove a Thought:**
   - Click the "Remove" button next to a thought to remove it manually.

## Structure

- **`src/`**: Contains the source code for the React application.
  - **`App.js`**: Main component managing the application state and rendering.
  - **`AddThoughtForm.js`**: Component for the form to add new thoughts.
  - **`Thought.js`**: Component representing an individual thought.
  - **`utilities.js`**: Utility functions for generating IDs and expiration times.

## Dependencies

- React
- React DOM

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This app was created as a simple exercise to practice React concepts.

Feel free to contribute, report issues, or suggest improvements!
