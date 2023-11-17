import { UserRepository } from "../../infrastructure/repositories/UserRepository";

export class GetCoodinatorUseCase {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userId: string) {
        try {
            const userExists = await this.userRepository.getCoodinator(userId);

            if (!userExists) {
                throw new Error("User not found");
            }

            return userExists;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}
