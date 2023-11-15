import { ScheduleUserRepository } from "../../@core/infrastructure/repositories/ScheduleUserRepository";
import { CreateScheduleUseCase } from "../../@core/domain/UseCases/ScheduleUser/CreateScheduleUseCase";
import { DeleteScheduleUseCase } from "../../@core/domain/UseCases/ScheduleUser/DeleteScheduleUseCase";
import { GetAllSchedulesUseCase } from "../../@core/domain/UseCases/ScheduleUser/GetAllSchedulesUseCase";
import { GetScheduleByIdUseCase } from "../../@core/domain/UseCases/ScheduleUser/GetScheduleByIdUseCase";
import { UpdateScheduleUseCase } from "../../@core/domain/UseCases/ScheduleUser/UpdateScheduleUseCase";

export class ScheduleUserController {
    private scheduleUserRepository: ScheduleUserRepository;
    private getAllSchedulesUseCase: GetAllSchedulesUseCase;
    private getScheduleByIdUseCase: GetScheduleByIdUseCase;
    private updateScheduleUseCase: UpdateScheduleUseCase;
    private deleteScheduleUseCase: DeleteScheduleUseCase;
    private createScheduleUseCase: CreateScheduleUseCase;

    constructor() {
        this.scheduleUserRepository = new ScheduleUserRepository();
        this.getAllSchedulesUseCase = new GetAllSchedulesUseCase(this.scheduleUserRepository);
        this.getScheduleByIdUseCase = new GetScheduleByIdUseCase(this.scheduleUserRepository);
        this.updateScheduleUseCase = new UpdateScheduleUseCase(this.scheduleUserRepository);
        this.deleteScheduleUseCase = new DeleteScheduleUseCase(this.scheduleUserRepository);
        this.createScheduleUseCase = new CreateScheduleUseCase(this.scheduleUserRepository);
    }

    async getAllSchedules() {
        const schedules = await this.getAllSchedulesUseCase.execute();
        return schedules;
    }

    async getScheduleById(idScheduleUser: string) {
        const schedule = await this.getScheduleByIdUseCase.execute(idScheduleUser);
        return schedule;
    }

    async updateSchedule(scheduleUser: any) {
        const updatedSchedule = await this.updateScheduleUseCase.execute(scheduleUser);
        return updatedSchedule;
    }

    async deleteSchedule(idScheduleUser: string) {
        const deletedSchedule = await this.deleteScheduleUseCase.execute(idScheduleUser);
        return deletedSchedule;
    }

    async createSchedule(scheduleUser: any) {
        const newSchedule = await this.createScheduleUseCase.execute(scheduleUser);
        return newSchedule;
    }
}