import { Coordinator } from "../../domain/Coodinator";
import { User } from "../../domain/User";

export interface IUserRepository {
    createUser(user: Omit<User, "idUser">): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    getCoodinator(userId: string): Promise<Coordinator | null>
}