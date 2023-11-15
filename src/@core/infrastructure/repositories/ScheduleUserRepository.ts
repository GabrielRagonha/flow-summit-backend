import { createPrismaClient } from "../../../shared.kernel/prisma";
import { ScheduleUser } from "../../domain/ScheduleUser";
import { IScheduleUserRepository } from "../interfaces/IScheduleUserRepository";

export class ScheduleUserRepository implements IScheduleUserRepository {
    private prisma = createPrismaClient();
    private schedules: ScheduleUser[] = [];

    public async getAllSchedules(): Promise<ScheduleUser[]> {
        this.schedules = [];

        const schedules = await this.prisma.scheduleUser.findMany();

        schedules.forEach((schedule) => {
            this.schedules.push(
                new ScheduleUser({
                    idScheduleUser: schedule.idScheduleUser,
                    idUser: schedule.idUser,
                    idEvent: schedule.idEvent,
                    createdAt: schedule.createdAt,
                    updatedAt: schedule.updatedAt,
                })
            );
        });

        return this.schedules;
    }

    public async getScheduleById(
        idScheduleUser: string
    ): Promise<ScheduleUser> {
        const schedule = await this.prisma.scheduleUser.findUnique({
            where: { idScheduleUser },
        });

        if (!schedule) {
            throw new Error("Schedule not found");
        }

        return new ScheduleUser({
            idScheduleUser: schedule.idScheduleUser,
            idUser: schedule.idUser,
            idEvent: schedule.idEvent,
            createdAt: schedule.createdAt,
            updatedAt: schedule.updatedAt,
        });
    }

    public async updateSchedule(
        scheduleUser: Omit<ScheduleUser, "createdAt" | "updatedAt">
    ): Promise<ScheduleUser> {
        const schedule = await this.prisma.scheduleUser.update({
            where: { idScheduleUser: scheduleUser.idScheduleUser },
            data: {
                idUser: scheduleUser.idUser,
                idEvent: scheduleUser.idEvent,
            },
        });

        return new ScheduleUser({
            idScheduleUser: schedule.idScheduleUser,
            idUser: schedule.idUser,
            idEvent: schedule.idEvent,
            createdAt: schedule.createdAt,
            updatedAt: schedule.updatedAt,
        });
    }

    public async deleteSchedule(idScheduleUser: string): Promise<void> {
        await this.prisma.scheduleUser.delete({
            where: { idScheduleUser },
        });
    }

    public async create(
        scheduleUser: Omit<
            ScheduleUser,
            "idScheduleUser" | "createdAt" | "updatedAt"
        >
    ): Promise<ScheduleUser> {
        const schedule = await this.prisma.scheduleUser.create({
            data: {
                idUser: scheduleUser.idUser,
                idEvent: scheduleUser.idEvent,
            },
        });

        return new ScheduleUser({
            idScheduleUser: schedule.idScheduleUser,
            idUser: schedule.idUser,
            idEvent: schedule.idEvent,
            createdAt: schedule.createdAt,
            updatedAt: schedule.updatedAt,
        });
    }
}
