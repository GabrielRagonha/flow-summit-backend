import { IScheduleUserRepository } from "../../../infrastructure/interfaces/IScheduleUserRepository";
import { ScheduleUser } from "../../ScheduleUser";

export class GetScheduleByIdUseCase {
    private scheduleUserRepository: IScheduleUserRepository;

    constructor(scheduleUserRepository: IScheduleUserRepository) {
        this.scheduleUserRepository = scheduleUserRepository;
    }

    execute(idScheduleUser: string) {
        return this.scheduleUserRepository.getScheduleById(idScheduleUser);
    }
}