// Why useEffect to sync storage → state: Read from persistent storage on component load
import { useEffect, useState } from 'react';
import { getNotes, deleteNote } from '../utils/storage';

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getNotes()); // re-sync after delete
  };

  return (
    <div>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        notes.map(note => (
          <div className="note" key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content.slice(0, 100)}</p>
            <button onClick={() => handleDelete(note.id)} style={{ marginTop: '0.5rem', backgroundColor: '#c62828' }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
