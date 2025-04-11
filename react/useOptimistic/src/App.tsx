
import './App.css'
import "sensorario-design-system/style/index.css";
import Library from './Library';
import { createNewBook } from '../api/createNewBook';
import { useState } from 'react';
import { Book } from './Book';

function App() {
  const [books, setBooks] = useState<Book[]>([
    { title: "React", sending: false },
    { title: "React, TypeScript e Next.js", sending: false },
  ]);

  async function sendBook(formData: FormData) {
    const book = formData.get("book");

    const sentBook = await createNewBook(book as string);
    setBooks((books: Book[]) => [...books, { title: sentBook, sending: false }]);
  }

  return (
    <div className="sensorario-container light">
      <h1>useOptimistic()</h1>
      <Library books={books} sendBook={sendBook} />;
    </div>
  )
}

export default App
