import { ScheduleUser } from "../../domain/ScheduleUser"

export interface IScheduleUserRepository {
    getAllSchedules(): Promise<ScheduleUser[]>,
    getScheduleById(idScheduleUser: string): Promise<ScheduleUser>,
    updateSchedule(scheduleUser: Omit<ScheduleUser, "createdAt" | "updatedAt">): Promise<ScheduleUser>,
    deleteSchedule(idScheduleUser: string): Promise<void>,
    create(scheduleUser: Omit<ScheduleUser, "idScheduleUser" | "createdAt" | "updatedAt">): Promise<ScheduleUser>,
}