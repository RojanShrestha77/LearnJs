import { Book, BookSchema } from "../types/books.type";

export const books: Book[] = [
        {id: '1', title:'1984', date: '2020'},
        {id: '2', title: 'To kill mockingbird', date: '2020'},
        {id: '3', title: 'THe great fatsby', date: '2021'}
]

export interface IbookRepository{
    getAllBooks() : Book[];
    createBook(book: Book): Book;
    getBookById?(Id: string) :Book | undefined;
}

export class BookRepository implements IbookRepository{

      getAllBooks() : Book[] {
        return  books;
    }


    createBook(book: Book): Book {
        books.push(book);
        return book;
    }
  
    getBookById(id: string): Book | undefined {
        return books.find(book => book.id == id)
    }
}