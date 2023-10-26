import { LoginUserUseCase } from "../../UserManagement/domain/UseCases/LoginUserUseCase";
import { SignUpUserUseCase } from "../../UserManagement/domain/UseCases/SignUpUserUseCase";
import { User } from "../../UserManagement/domain/User";
import { UserRepository } from "../../UserManagement/infrastructure/repositories/UserRepository";

export class UserController {
    private userRepository: UserRepository;
    private loginUseCase: LoginUserUseCase;
    private signupUseCase: SignUpUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.loginUseCase = new LoginUserUseCase(this.userRepository);
        this.signupUseCase = new SignUpUserUseCase(this.userRepository);
    }

    public async login(user: Omit<User, "idUser" | "name" | "createdAt" | "updatedAt">) {
        return await this.loginUseCase.execute(user);
    }
    
    public async signup(user: Omit<User, "idUser" | "createdAt" | "updatedAt">) {
        return await this.signupUseCase.execute(user);
    }
}