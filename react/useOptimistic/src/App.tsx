import { useOptimistic, useState } from "react";

const createNewBook = async (message: FormDataEntryValue | null) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return message + " content from rest api";
};

type Book = { text: string; sending: boolean; key?: number };

function Library({
  books: messages,
  createBook: sendMessage,
}: {
  books: Book[];
  createBook: (formData: FormData) => void;
}) {
  async function formAction(formData: FormData) {
    addContent(String(formData.get("message")));
    await sendMessage(formData);
  }

  const [optimisticContent, addContent] = useOptimistic(
    messages,
    (state: Book[], newMessage: string) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticContent.map(
        (message: { text: string; sending: boolean }, index: number) => (
          <div key={index}>
            {message.text}
            {!!message.sending && <small> (Sending...)</small>}
          </div>
        )
      )}

      <form action={formAction}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default function App() {
  const [books, setBooks] = useState<Book[]>([
    { text: "React", sending: false, key: 1 },
    { text: "React, TypeScript e Next.js", sending: false, key: 3 },
  ]);

  async function sendMessage(formData: FormData) {
    const sentMessage = await createNewBook(formData.get("message"));
    setBooks((messages: any) => [...messages, { text: sentMessage }]);
  }

  return <Library books={books} createBook={sendMessage} />;
}
