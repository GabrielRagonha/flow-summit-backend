import { IScheduleUserRepository } from "../../../infrastructure/interfaces/IScheduleUserRepository";
import { ScheduleUser } from "../../ScheduleUser";

export class DeleteScheduleUseCase {
    private scheduleUserRepository: IScheduleUserRepository;

    constructor(scheduleUserRepository: IScheduleUserRepository) {
        this.scheduleUserRepository = scheduleUserRepository;
    }

    execute(idScheduleUser: string) {
        return this.scheduleUserRepository.deleteSchedule(idScheduleUser);
    }
}