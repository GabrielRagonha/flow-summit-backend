import { LoginUserUseCase } from "../../UserManagement/domain/UseCases/LoginUserUseCase";
import { SignUpUserUseCase } from "../../UserManagement/domain/UseCases/SignUpUserUseCase";
import { UserDomain } from "../../UserManagement/domain/UserDomain";
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

    public async login(user: Omit<UserDomain, "idUser" | "name" | "createdAt" | "updatedAt">) {
        return await this.loginUseCase.execute(user);
    }
    
    public async signup(user: Omit<UserDomain, "idUser" | "createdAt" | "updatedAt">) {
        return await this.signupUseCase.execute(user);
    }
}