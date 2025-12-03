import React, { useState } from 'react';
import { X } from 'lucide-react';

function BookForm({ book, onSave, onClose }) {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [totalPages, setTotalPages] = useState(book ? book.totalPages : '');
  const [currentPage, setCurrentPage] = useState(book ? book.currentPage : '');
  const [status, setStatus] = useState(book ? book.status : 'want-to-read');

  function handleSubmit() {
    if (!title || !author) {
      alert('Please fill in Title and Author!');
      return;
    }

    const bookData = {
      title,
      author,
      totalPages: totalPages || 0,
      currentPage: currentPage || 0,
      status,
    };

    onSave(bookData);
  }

  return (
    <div style={styles.modal}>
      <div style={styles.formBox}>
        <button style={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <h2 style={styles.formTitle}>
          {book ? 'Edit Book' : 'Add New Book'}
        </h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Book Title *</label>
          <input
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Author *</label>
          <input
            style={styles.input}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
          />
        </div>

        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Total Pages</label>
            <input
              type="number"
              style={styles.input}
              value={totalPages}
              onChange={(e) => setTotalPages(e.target.value)}
              placeholder="300"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Current Page</label>
            <input
              type="number"
              style={styles.input}
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Reading Status</label>
          <select
            style={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="want-to-read">Want to Read</option>
            <option value="reading">Currently Reading</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button style={styles.saveBtn} onClick={handleSubmit}>
          {book ? 'Update Book' : 'Save Book'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 1000,
  },
  formBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
  },
  formTitle: {
    margin: '0 0 1.5rem 0',
    fontSize: '1.5rem',
    color: '#333',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#333',
    fontSize: '0.875rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #e5e7eb',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  saveBtn: {
    width: '100%',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default BookForm;