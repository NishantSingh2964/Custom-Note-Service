// Controlled inputs for title and content
// Why I chose useState + this submit handler: Simple local state management fits small forms
import { useState } from "react";
import { saveNotes, getNotes } from '../utils/storage';

export default function AddNote({ onNoteAdded }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!title.trim()) {
      alert('Please enter a title for your note.');
      return;
    }
  
    setSaving(true);
    setError('');
    try {
      const newNote = { id: Date.now(), title, content };
      const existingNotes = getNotes();
      saveNotes([newNote, ...existingNotes]);
      setTitle('');
      setContent('');
      if (onNoteAdded) onNoteAdded();
    } catch (err) {
      setError('Error saving note');
    } finally {
      setSaving(false);
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Add Note'}</button>
      {error && <div className="error-banner">{error}</div>}
    </form>
  );
}
