import {z} from 'zod';
import { BookSchema } from '../types/books.type';




// Dto = dATA tRANSFER oBJECT
export const CreateBookDTO = BookSchema.pick({id: true, title: true});
export type createBookDTO = z.infer<typeof CreateBookDTO>;
