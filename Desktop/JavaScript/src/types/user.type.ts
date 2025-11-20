import {email, z} from 'zod';
// zod validates the condn
// it checked if the name is string email is email string and is optional  in the below code

export const UserSchema = z.object({
    name: z.string(),
    email: z.email().optional(),
    age: z.number().min(0).optional(),
})


// z.infer converts the zod schema into the typescrript
export type User = z.infer<typeof UserSchema>;

// Database related type
export type UserDocument = User & {
    _id : string;
    createdAt: Date;
    updatedAt: Date;
}