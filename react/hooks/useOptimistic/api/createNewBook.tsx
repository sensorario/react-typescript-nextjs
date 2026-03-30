export const createNewBook = async (book: string) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return book;
};