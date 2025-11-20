import express, { Request, Response, Router} from 'express'
import { BookController } from '../controllers/book.controllers';

const router: Router = Router();

const bookController = new BookController();

router.get("/",bookController.getBooks)

export default router;
