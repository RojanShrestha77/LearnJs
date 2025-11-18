import { UserRepositoryInterface } from "../interfaces/user.repository.interface";
import {User, UserDocument } from "../types/user.type"

export class UserRepostiory implements UserRepositoryInterface {
    private Users: UserDocument[] = [];
    async createUser(user: User): Promise<UserDocument>{
         const newUser: UserDocument = {
            ...user,
            _id: "generated_id",
            createdAt: new Date(),
            updatedAt: new Date(),
            
         };
         this.Users.push(newUser);
         return newUser;
    }

    async getUsers(): Promise<UserDocument[]> {
        return this.Users;
    }
}