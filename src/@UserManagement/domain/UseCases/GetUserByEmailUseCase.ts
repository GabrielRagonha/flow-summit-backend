import { UserRepository } from "../../infrastructure/repositories/UserRepository";

export class GetUserByEmailUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(email: string) {
        try {
            const userExists = await this.userRepository.getUserByEmail(email);

            if (!userExists) {
                throw new Error("User not found");
            }

            return userExists;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
