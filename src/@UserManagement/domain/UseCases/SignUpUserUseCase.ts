import { UserRepository } from "../../infrastructure/repositories/UserRepository";
import { User } from "../User";

export class SignUpUserUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: Omit<User, "idUser" | "createdAt" | "updatedAt">) {
        try {
            const userExists = await this.userRepository.getUserByEmail(user.email);

            if (userExists) {
                throw new Error("User already exists");
            }

            const userCreated = await this.userRepository.createUser(user);

            return userCreated;

        } catch (error: any) {
            throw new Error(error);
        }
    }
}