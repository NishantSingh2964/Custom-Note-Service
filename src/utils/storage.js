// storage.js
// storage.js
const STORAGE_KEY = 'custom_notes';

export const getNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error('Failed to load notes', err);
    return [];
  }
};

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Failed to save notes', err);
    throw err;
  }
};

export const deleteNote = (id) => {
  const notes = getNotes();
  const filtered = notes.filter(note => note.id !== id);
  saveNotes(filtered);
};
