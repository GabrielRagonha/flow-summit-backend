import { IScheduleUserRepository } from "../../../infrastructure/interfaces/IScheduleUserRepository";
import { ScheduleUser } from "../../ScheduleUser";

export class CreateScheduleUseCase {
    private scheduleUserRepository: IScheduleUserRepository;

    constructor(scheduleUserRepository: IScheduleUserRepository) {
        this.scheduleUserRepository = scheduleUserRepository;
    }

    execute(scheduleUser: Omit<ScheduleUser, "idScheduleUser" | "createdAt" | "updatedAt">) {
        return this.scheduleUserRepository.create(scheduleUser);
    }
}