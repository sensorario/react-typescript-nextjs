import { Book } from "./Book";
import { BookList } from "./BookList";
import { useOptimisticContent } from "./useOptimisticContent";

type LibraryProps = {
    books: Book[];
    sendBook: (formData: FormData) => void;
};

export default function Library({ books, sendBook }: LibraryProps) {
    const [optimisticBooks, setOptimisticBooks] = useOptimisticContent(books);
    const isSending = optimisticBooks.some((book) => book.sending);

    async function formAction(formData: FormData) {
        setOptimisticBooks(String(formData.get("book")));
        await sendBook(formData);
    }

    return (
        <>
            <BookList books={optimisticBooks} />
            <form action={formAction}>
                <input type="text" name="book"
                    placeholder="Book title!"
                    disabled={isSending} />
                <button type="submit"
                    disabled={isSending}>Send</button>
            </form>
        </>
    );
}