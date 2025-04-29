
import './App.css'

import { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Nav from './components/Nav';

export default function App() {
  const [view, setView] = useState('add');
  const [refreshNotesFlag, setRefreshNotesFlag] = useState(false);

  const handleNoteAdded = () => {
    setRefreshNotesFlag((prev) => !prev); // toggle to trigger NotesList refresh
  };

  return (
    <div>
      <Nav view={view} setView={setView} />
      {view === 'add' ? (
        <AddNote onNoteAdded={handleNoteAdded} />
      ) : (
        <NotesList key={refreshNotesFlag} />
      )}
    </div>
  );
}
