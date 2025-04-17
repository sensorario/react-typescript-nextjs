import { memo } from "react";

export const ListaLibri = memo(({ books }: { books: { name: string }[] }) => {
    console.log("render");

    return (
        <div className="books-container">
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.name}</li>
                ))}
            </ul>
        </div>
    );
});