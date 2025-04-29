// Controlled inputs for title and content
// Why I chose useState + this submit handler: Simple local state management fits small forms
import { useState, useEffect } from 'react';
import { saveNotes, getNotes } from '../utils/storage';

export default function AddNote({ onNoteAdded }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [saving, setSaving] = useState(false);
    const [storageError, setStorageError] = useState('');
    const [validationError, setValidationError] = useState('');
    const [fadeOut, setFadeOut] = useState(false);

    // Auto-clear validation and storage errors after 3 seconds
    useEffect(() => {
        if (validationError || storageError) {
            setFadeOut(false);
            const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // start fade at 2s
            const clearTimer = setTimeout(() => {
                setValidationError('');
                setStorageError('');
                setFadeOut(false);
            }, 3000); // clear at 3s

            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(clearTimer);
            };
        }
    }, [validationError, storageError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setValidationError('Title is required.');
            return;
        }

        setValidationError('');
        setStorageError('');
        setSaving(true);

        try {
            const newNote = {
                id: Date.now(),
                title: title.trim(),
                content: content.trim(),
            };
            const existingNotes = getNotes();
            saveNotes([newNote, ...existingNotes]);
            setTitle('');
            setContent('');
            if (onNoteAdded) onNoteAdded();
        } catch (err) {
            setStorageError('Failed to save note. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit" disabled={saving}>
                {saving ? 'Saving...' : 'Add Note'}
            </button>

            {validationError && (
                <div className={`error-banner ${fadeOut ? 'fade-out' : ''}`}>
                    {validationError}
                </div>
            )}
            {storageError && (
                <div className={`error-banner ${fadeOut ? 'fade-out' : ''}`}>
                    {storageError}
                </div>
            )}

            {storageError && <div className="error-banner">{storageError}</div>}
        </form>
    );
}
