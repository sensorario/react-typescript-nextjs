import { useOptimistic, useState } from "react";

const createNewBook = async (book: FormDataEntryValue | null) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return book;
};

type Book = { text: string; sending: boolean };

function Library({
  books: books,
  createBook: sendBook,
}: {
  books: Book[];
  createBook: (formData: FormData) => void;
}) {
  async function formAction(formData: FormData) {
    addContent(String(formData.get("book")));
    await sendBook(formData);
  }

  const [optimisticContent, addContent] = useOptimistic(
    books,
    (state: Book[], newBook: string) => [
      ...state,
      {
        text: newBook,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticContent.map((book: Book, index: number) => (
        <div key={index}>
          {book.text}
          {!!book.sending && <small>(Sending...)</small>}
        </div>
      ))}

      <form action={formAction}>
        <input type="text" name="book" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default function App() {
  const [books, setBooks] = useState<Book[]>([
    { text: "React", sending: false },
    { text: "React, TypeScript e Next.js", sending: false },
  ]);

  async function sendBook(formData: FormData) {
    const sentBook = await createNewBook(formData.get("book"));
    setBooks((books: any) => [...books, { text: sentBook }]);
  }

  return <Library books={books} createBook={sendBook} />;
}
