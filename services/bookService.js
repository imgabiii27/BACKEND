import * as bookModel from '../models/bookModel.js'; 
  
export const fetchAllbooks = async () => {
    const books = await bookModel.fetchAllBooks();
    return books;
}