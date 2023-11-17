import { GetCoodinatorUseCase } from "../../@UserManagement/domain/UseCases/GetCoodinatorUseCase";
import { GetUserByEmailUseCase } from "../../@UserManagement/domain/UseCases/GetUserByEmailUseCase";
import { LoginUserUseCase } from "../../@UserManagement/domain/UseCases/LoginUserUseCase";
import { SignUpUserUseCase } from "../../@UserManagement/domain/UseCases/SignUpUserUseCase";
import { User } from "../../@UserManagement/domain/User";
import { UserRepository } from "../../@UserManagement/infrastructure/repositories/UserRepository";

export class UserController {
    private userRepository: UserRepository;
    private loginUseCase: LoginUserUseCase;
    private signupUseCase: SignUpUserUseCase;
    private getCoodinatorUseCase: GetCoodinatorUseCase;
    private getUserByEmailUseCase: GetUserByEmailUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.loginUseCase = new LoginUserUseCase(this.userRepository);
        this.signupUseCase = new SignUpUserUseCase(this.userRepository);
        this.getUserByEmailUseCase = new GetUserByEmailUseCase(
            this.userRepository
        );
        this.getCoodinatorUseCase = new GetCoodinatorUseCase(
            this.userRepository
        );
    }

    public async login(
        user: Omit<User, "idUser" | "name" | "createdAt" | "updatedAt">
    ) {
        const token = await this.loginUseCase.execute(user);
        const userByEmail = await this.getUserByEmailUseCase.execute(
            user.email
        );
        return {
            token,
            user: userByEmail,
        };
    }

    public async signup(
        user: Omit<User, "idUser" | "createdAt" | "updatedAt">
    ) {
        return await this.signupUseCase.execute(user);
    }

    public async getCoordinator(userId: string) {
        return await this.getCoodinatorUseCase.execute(userId);
    }
}
