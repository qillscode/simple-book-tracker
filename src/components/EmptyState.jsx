import React from 'react';
import { BookOpen } from 'lucide-react';

function EmptyState() {
  return (
    <div style={styles.empty}>
      <BookOpen size={60} style={{ color: '#999' }} />
      <p style={styles.text}>No books yet. Start adding!</p>
    </div>
  );
}

const styles = {
  empty: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '3rem',
  },
  text: {
    marginTop: '1rem',
    color: '#666',
    fontSize: '1.125rem',
  },
};

export default EmptyState;