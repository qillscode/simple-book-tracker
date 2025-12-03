import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

function BookCard({ book, onEdit, onDelete }) {
  function getProgress() {
    if (!book.totalPages || book.totalPages === 0) return 0;
    return Math.round((book.currentPage / book.totalPages) * 100);
  }


  function getBadgeColor() {
    if (book.status === 'reading') return '#fbbf24';
    if (book.status === 'completed') return '#ffb7d3ff';
    return '#93c5fd';
  }

  function getBadgeText() {
    if (book.status === 'reading') return '📖 Reading';
    if (book.status === 'completed') return '✓ Done';
    return '📚 Want to Read';
  }

  return (
    <div style={styles.card}>
      <div style={{ ...styles.badge, backgroundColor: getBadgeColor() }}>
        {getBadgeText()}
      </div>

      <h3 style={styles.bookTitle}>{book.title}</h3>
      <p style={styles.bookAuthor}>by {book.author}</p>

      {book.status === 'reading' && book.totalPages > 0 && (
        <div style={styles.progressSection}>
          <div style={styles.progressInfo}>
            <span style={styles.pageText}>
              Page {book.currentPage} of {book.totalPages}
            </span>
            <span style={styles.percentage}>
              {getProgress()}%
            </span>
          </div>
          <div style={styles.progressBar}>
            <div style={{
              ...styles.progressFill,
              width: getProgress() + '%'
            }} />
          </div>
        </div>
      )}
      {book.status === 'completed' && book.totalPages > 0 && (
        <p style={styles.completedText}>
          ✓ Finished {book.totalPages} pages
        </p>
      )}

      {book.status === 'want-to-read' && book.totalPages > 0 && (
        <p style={styles.wantToReadText}>
          {book.totalPages} pages
        </p>
      )}

      <p style={styles.date}>Added: {book.dateAdded}</p>


      <div style={styles.actions}>
        <button style={styles.editBtn} onClick={() => onEdit(book)}>
          <Edit size={16} /> Edit
        </button>
        <button style={styles.deleteBtn} onClick={() => onDelete(book.id)}>
          <Trash2 size={16} /> Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#000',
  },
  bookTitle: {
    fontSize: '1.25rem',
    margin: '0 0 0.5rem 0',
    color: '#333',
    paddingRight: '6rem',
  },
  bookAuthor: {
    color: '#666',
    margin: '0 0 1rem 0',
  },
  progressSection: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    color: '#666',
  },
  pageText: {
    fontWeight: 'bold',
  },
  percentage: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e5e7eb',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    transition: 'width 0.3s ease',
  },
  completedText: {
    color: '#059669',
    fontSize: '0.875rem',
    margin: '0.5rem 0',
    fontWeight: 'bold',
  },
  wantToReadText: {
    color: '#6b7280',
    fontSize: '0.875rem',
    margin: '0.5rem 0',
  },
  date: {
    fontSize: '0.75rem',
    color: '#999',
    margin: '0.5rem 0',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  editBtn: {
    flex: 1,
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    fontWeight: 'bold',
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    fontWeight: 'bold',
  },
};

export default BookCard;