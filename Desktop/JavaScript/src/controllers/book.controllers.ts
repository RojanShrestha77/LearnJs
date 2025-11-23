
// export type Book = {
//     id: String,
//     title: String,
//     date: String
// }
import { Request, Response } from "express";
import { CreateBookDTO } from "../dtos/books.dto";
import { Book } from "../types/books.type";
import { books } from "../repositories/book.repository";
import { Bookservice } from "../services/book.service";

let BookServices: Bookservice = new Bookservice();

export class BookController {

    createBook = (req: Request, res: Response) => {
        try{     const validation = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({error:validation.error})
        }
        const {id, title} = validation.data;
        const newBook:Book = BookServices.createBook({id, title});
        return res.status(201).json(newBook)
    }
    catch(error: Error| any){
        return res.status(400).send(error.message ?? 'something')

    }

        // const{id, title} = req.body; //destructure
        // // const id = req.body.id; const title req = body.title
        // // if(!id) {
        // //     return res.status(400).json({message: "Id is required"});
        // // }
        // // if(!title){
        // //     return res.status(400).json({message: 'title is reuqired'});

        // // }
        // const exist = books.find(book => book.id === id);
        // if(!exist){
        //     return res.status(400).json({message: `${id} already exist`})
        // }
        // const newBook: Book = {id, title};
        // //{id: id, title: title}
        // books.push(newBook);
        // return res.status(201).json(newBook)
    }
    
    getBooks = (req: Request, res: Response) =>{
        const reutrn_book: Book[]= books;
        return res.status(200).json(books);
    }
}