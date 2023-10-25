import { UserDomain } from "../../domain/UserDomain";

export interface IUserRepository {
    createUser(user: Omit<UserDomain, "idUser">): Promise<UserDomain>;
    getUserByEmail(email: string): Promise<UserDomain | null>;
}