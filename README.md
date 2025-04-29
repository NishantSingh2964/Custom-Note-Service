# 📝 Custom Note Service (No Backend)

A simple React app that allows users to add, view, and delete notes. All data is stored locally using `localStorage` — no backend required.

## 🚀 Live Demo

👉 [Live Site on Netlify](https://custom-note-service-nu.vercel.app/)

## 📂 GitHub Repository

👉 [GitHub Repository](https://github.com/your-username/custom-note-app)

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/custom-note-app
   cd custom-note-app
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
🧠 Component Design & Logic
AddNote.jsx
Form with controlled title and content inputs.

Validates that a title is present.

Shows error banner if validation fails.

Calls storage utility to save the note.

js
Copy
Edit
// Why I chose useState + this submit handler:
// Simple and effective state handling for form inputs and validation.
NotesList.jsx
Loads saved notes using useEffect.

Renders note titles and content snippets.

Includes delete button for each note.

js
Copy
Edit
// Why useEffect to sync storage → state:
// Keeps UI in sync with persisted data on component mount.
Nav.jsx
Tabs to toggle between "Add Note" and "View Notes".

js
Copy
Edit
// Why this nav approach for simplicity:
// Keeps routing logic minimal and avoids over-complication for a small app.
storage.js
Handles reading and writing to localStorage.

js
Copy
Edit
// Why localStorage + key naming:
// Uses a unique key to prevent clashes and ensures persistence between sessions.
🎨 Styling Approach
Plain CSS in index.css with reusable classes.

Includes:

Responsive input styles

Styled error banners

Fade-out animation for alerts

md
Copy
Edit
- Tailored with plain CSS for full control and zero build overhead.
⚠️ Error & Loading States
Error Banner: Displays styled message if title is missing or save fails.

js
Copy
Edit
// Why display error banner: gives clear user feedback on issues.
Saving Indicator: Shows "Saving..." text during note submission.

js
Copy
Edit
// Why show spinner here: improves UX on slower storage writes.
Errors fade out automatically after 3 seconds with a smooth animation.

📁 Files & Structure
css
Copy
Edit
/src
  ├── AddNote.jsx
  ├── NotesList.jsx
  ├── Nav.jsx
  ├── App.jsx
  ├── utils/
  │     └── storage.js
  ├── index.css
.gitignore
README.md
vite.config.js (if Vite)
✅ Features
 Add notes with title and content

 Persist notes to localStorage

 View notes in a list

 Delete notes individually

 Input validation for empty titles

 Error banner with auto-dismiss

 Simple tab-based navigation

🕒 Time Estimate
Estimated: 2 hours

Completed in: ✅ 2 hours

🌱 Future Improvements
Note search/filter

Edit notes

Light/dark theme

Import/export notes

🧪 Optional .env Example
If adding feature flags in the future:

env
Copy
Edit
VITE_FEATURE_DELETE=true
