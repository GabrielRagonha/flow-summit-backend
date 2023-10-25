import { LoginUserUseCase } from "../../UserManagement/domain/UseCases/LoginUserUseCase";
import { UserDomain } from "../../UserManagement/domain/UserDomain";
import { UserRepository } from "../../UserManagement/infrastructure/repositories/UserRepository";

export class UserController {
    private loginUseCase: LoginUserUseCase;

    constructor() {
        this.loginUseCase = new LoginUserUseCase(new UserRepository())
    }

    public async login(user: Omit<UserDomain, "idUser" | "name" | "createdAt" | "updatedAt">) {
        return  await this.loginUseCase.execute(user);
    }
    
    public async signup() {}
}