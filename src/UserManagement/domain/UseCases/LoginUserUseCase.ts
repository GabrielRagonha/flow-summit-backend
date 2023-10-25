import { Environment } from "../../../shared.kernel/environment";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { UserDomain } from "../UserDomain";
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: Omit<UserDomain, "idUser" | "name" | "createdAt" | "updatedAt">): Promise<string> {
        try {
            const userExists = await this.userRepository.getUserByEmail(user.email);
    
            if (!userExists) {
                throw new Error("User or Password is incorrect");
            }
            
            if (userExists.password !== user.password) {
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