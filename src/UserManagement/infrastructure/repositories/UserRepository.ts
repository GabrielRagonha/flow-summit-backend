import { hash } from "bcryptjs";
import { createPrismaClient } from "../../../shared.kernel/prisma";
import { UserDomain } from "../../domain/UserDomain";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
    private prisma = createPrismaClient();

    public async createUser(user: Omit<UserDomain, "idUser" | "createdAt" | "updatedAt">): Promise<UserDomain> {
        const passwordCrypt = await hash(user.password, 8);

        const response_database = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: passwordCrypt,
            },
        });

        return new UserDomain({
            idUser: response_database.idUser,
            name: response_database.name,
            email: response_database.email,
            password: response_database.password,
            createdAt: response_database.createdAt,
            updatedAt: response_database.updatedAt,
        });
    }

    public async getUserByEmail(email: string): Promise<UserDomain | null> {
        const response_database = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (response_database === null) {
            return null;
        }

        return new UserDomain({
            idUser: response_database.idUser,
            name: response_database.name,
            email: response_database.email,
            password: response_database.password,
            createdAt: response_database.createdAt,
            updatedAt: response_database.updatedAt,
        });
    }
}
