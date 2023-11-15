import { IScheduleUserRepository } from "../../../infrastructure/interfaces/IScheduleUserRepository";
import { ScheduleUser } from "../../ScheduleUser";

export class GetAllSchedulesUseCase {
    private scheduleUserRepository: IScheduleUserRepository;

    constructor(scheduleUserRepository: IScheduleUserRepository) {
        this.scheduleUserRepository = scheduleUserRepository;
    }

    execute() {
        return this.scheduleUserRepository.getAllSchedules();
    }
}