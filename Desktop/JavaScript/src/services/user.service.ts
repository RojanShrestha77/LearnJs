import { CreateUserDto, UserResponseDto } from "../dtos/user.dto";
import { UserRepositoryInterface } from "../interfaces/user.repository.interface";

export class UserServices{
    constructor(private userRepository: UserRepositoryInterface){}

    async registerUser(userData: CreateUserDto): Promise<UserResponseDto>{
        const newUser = await this.userRepository.createUser(userData);

        const response : UserResponseDto = {
            
            id: newUser._id,
            name: newUser.name,
            email: newUser.email ??"N/A",
            creatAt: newUser.createdAt
        };
        return response;
    }
    
}