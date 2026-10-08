import * as bookModel from '../models/bookModel.js'; 
  
export const fetchAllbooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insertBook(book);
    return bookId;
}
