import { Book } from "../types/books.type";
import { BookRepository, IbookRepository } from "../repositories/book.repository";
import { createBookDTO } from "../dtos/books.dto";

let bookRepository: IbookRepository = new BookRepository();
export class Bookservice{
    getAllBooks(): Book[] {
        let response : Book[]= bookRepository.getAllBooks().map((book: Book) => {
            return{
                ...book,
                title: book.title.toUpperCase()

            }


        });
            return response;

    }
    createBook(bookDTO: createBookDTO): Book {
    const newBook: Book = {
        id: bookDTO.id,
        title: bookDTO.title
    };
    let existingBook = bookRepository.getBookById?.(newBook.id);
    if (existingBook){
        throw new Error (`${newBook.id} already existing`)
    }
    return bookRepository.createBook(newBook)
}

}

