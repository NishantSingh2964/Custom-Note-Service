// Why this nav approach for simplicity: Minimal toggle is enough for 2 views

export default function Nav({ view, setView }) {
    return (
      <nav>
        <button onClick={() => setView('add')}>Add Note</button>
        <button onClick={() => setView('list')}>View Notes</button>
      </nav>
    );
  }
  