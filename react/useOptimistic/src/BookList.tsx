import { Book } from "./Book";

export const BookList: React.ElementType<{ books: Book[] }> = ({ books }) => {
    return (
        <>
            {books.map((book: Book, index: number) => (
                <div key={index}>
                    {book.title}
                    {!!book.sending && <small>(Sending...)</small>}
                </div>
            ))}
        </>
    );
}