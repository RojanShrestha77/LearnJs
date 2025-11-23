import express, { Request, Response, Router} from 'express'
import { BookController } from '../controllers/book.controllers';

const router: Router = Router();

const bookController = new BookController();

router.get("/",bookController.getBooks)

// make a router that handles GET request that takes bookid
// /:bookid and calls bookCOntroller.getBookByID
// reouter.get('/:bookid, bookcontroller.getBookByID);

export default router;
