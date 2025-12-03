import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import EmptyState from './components/EmptyState';

function App() {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    const allBooks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('book_')) {
        const book = JSON.parse(localStorage.getItem(key));
        allBooks.push(book);
      }
    }
    setBooks(allBooks);
  }

  function saveBook(bookData) {
    const book = {
      ...bookData,
      id: editingBook ? editingBook.id : Date.now(),
      dateAdded: editingBook ? editingBook.dateAdded : new Date().toLocaleDateString()
    };

    localStorage.setItem('book_' + book.id, JSON.stringify(book));
    loadBooks();
    closeForm();
  }

  function deleteBook(id) {
    if (window.confirm('Delete this book?')) {
      localStorage.removeItem('book_' + id);
      loadBooks();
    }
  }

  function editBook(book) {
    setEditingBook(book);
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
    setEditingBook(null);
  }

  return (
    <div style={styles.container}>
      <Header 
        bookCount={books.length}
        onAddClick={() => setShowForm(true)}
      />

      <div style={styles.bookGrid}>
        {books.length === 0 ? (
          <EmptyState />
        ) : (
          books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={editBook}
              onDelete={deleteBook}
            />
          ))
        )}
      </div>

      {showForm && (
        <BookForm
          book={editingBook}
          onSave={saveBook}
          onClose={closeForm}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem 1rem',
  },
  bookGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
};

export default App;