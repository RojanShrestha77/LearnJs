import {Request, Response} from 'express';
import {z} from 'zod';


export const BookSchema = z.object ({
    id: z.string().min(1, { message: "Id is required"}),
    title: z.string().min(1, {message: "Title is required"}),
    date: z.string().optional(),
});
export type Book = z.infer<typeof BookSchema>

// Dto = dATA tRANSFER oBJECT
export const CreateBookDTO = BookSchema.pick({id: true, title: true});
export type createBookDTO = z.infer<typeof CreateBookDTO>;

// export type Book = {
//     id: String,
//     title: String,
//     date: String
// }

export const books: Book[] = [
        {id: '1', title:'1984', date: '2020'},
        {id: '2', title: 'To kill mockingbird', date: '2020'},
        {id: '3', title: 'THe great fatsby', date: '2021'}
]
export class BookController {

    createBook = (req: Request, res: Response) => {
        const{id, title} = req.body; //destructure
        // const id = req.body.id; const title req = body.title
        if(!id) {
            return res.status(400).json({message: "Id is required"});
        }
        if(!title){
            return res.status(400).json({message: 'title is reuqired'});

        }
        const exist = books.find(book => book.id === id);
        if(!exist){
            return res.status(400).json({message: `${id} already exist`})
        }
        const newBook: Book = {id, title};
        //{id: id, title: title}
        books.push(newBook);
        return res.status(201).json(newBook)
    }
    getBooks = (req: Request, res: Response) =>{
        const reutrn_book: Book[]= books;
        return res.status(200).json(books);
    }
}