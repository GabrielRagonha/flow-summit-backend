import { IScheduleUserRepository } from "../../../infrastructure/interfaces/IScheduleUserRepository";
import { ScheduleUser } from "../../ScheduleUser";

export class UpdateScheduleUseCase {
    private scheduleUserRepository: IScheduleUserRepository;

    constructor(scheduleUserRepository: IScheduleUserRepository) {
        this.scheduleUserRepository = scheduleUserRepository;
    }

    execute(scheduleUser: Omit<ScheduleUser, "createdAt" | "updatedAt">) {
        return this.scheduleUserRepository.updateSchedule(scheduleUser);
    }
}