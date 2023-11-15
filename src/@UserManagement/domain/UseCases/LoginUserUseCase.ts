import { compare } from "bcryptjs";
import { Environment } from "../../../shared.kernel/environment";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { User } from "../User";
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: Omit<User, "idUser" | "name" | "createdAt" | "updatedAt">): Promise<string> {
        try {
            const userExists = await this.userRepository.getUserByEmail(user.email);
    
            if (!userExists) {
                throw new Error("User or Password is incorrect");
            }
            
            const passwordMatch = await compare(user.password, userExists.password)

            if (!passwordMatch) {
                throw new Error("User or Password is incorrect");
            }
            
            const token = jwt.sign({ userExists }, Environment.jwt_secret, {
                expiresIn: '24h'
            });
            
            if(!token) {
                throw new Error("Internal Error");
            }

            return token;

        } catch (error: any) {
            throw new Error(error);
        }
    }
}