import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import bookRoute from './routes/book.route';

const app = express();
const port = 3000;



app.use(bodyParser.json());

app.get("/",(req: Request, res: Response) => {
    res.send("hello, world");
});

app.use('/api/books',bookRoute);

app.listen(
    port,
    () => {
        console.log("Server: http/localhost:${port}");
    }
)