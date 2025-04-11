import { useOptimistic } from "react";
import { Book } from "./Book";

export function useOptimisticContent(initialBooks: Book[]) {
    return useOptimistic(
        initialBooks,
        (state: Book[], newBook: string) => [
            ...state,
            {
                title: newBook,
                sending: true,
            },
        ]
    );
}