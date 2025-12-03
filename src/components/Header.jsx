import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

function Header({ bookCount, onAddClick }) {
  return (
    <div style={styles.header}>
      <div style={styles.headerLeft}>
        <BookOpen size={36} />
        <div>
          <h1 style={styles.title}>My Reading List</h1>
          <p style={styles.subtitle}>{bookCount} books</p>
        </div>
      </div>
      <button style={styles.addBtn} onClick={onAddClick}>
        <Plus size={20} /> Add Book
      </button>
    </div>
  );
}

const styles = {
  header: {
    maxWidth: '1200px',
    margin: '0 auto 2rem',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  title: {
    fontSize: '2rem',
    margin: 0,
    color: '#333',
  },
  subtitle: {
    margin: '0.25rem 0 0 0',
    color: '#666',
  },
  addBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

export default Header;