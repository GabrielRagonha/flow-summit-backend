import { hash } from "bcryptjs";
import { createPrismaClient } from "../../../shared.kernel/prisma";
import { User } from "../../domain/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import { Coordinator } from "../../domain/Coodinator";

export class UserRepository implements IUserRepository {
    private prisma = createPrismaClient();

    public async getCoodinator(userId: string): Promise<Coordinator | null> {
        const response_database = await this.prisma.coordinator.findUnique({
            where: {
                idUser: userId,
            },
        });

        if (response_database === null) {
            return null;
        }

        return new Coordinator({
            idCoordinator: response_database.idCoordinator,
            idUser: response_database.idUser,
            institution: response_database.institution,
        });
    }

    public async createUser(
        user: Omit<User, "idUser" | "createdAt" | "updatedAt">
    ): Promise<User> {
        const passwordCrypt = await hash(user.password, 8);

        const response_database = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: passwordCrypt,
            },
        });

        return new User({
            idUser: response_database.idUser,
            name: response_database.name,
            email: response_database.email,
            password: response_database.password,
            createdAt: response_database.createdAt,
            updatedAt: response_database.updatedAt,
        });
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        const response_database = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (response_database === null) {
            return null;
        }

        return new User({
            idUser: response_database.idUser,
            name: response_database.name,
            email: response_database.email,
            password: response_database.password,
            createdAt: response_database.createdAt,
            updatedAt: response_database.updatedAt,
        });
    }
}
