import { User } from "../../domain/User";

export interface IUserRepository {
    createUser(user: Omit<User, "idUser">): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
}