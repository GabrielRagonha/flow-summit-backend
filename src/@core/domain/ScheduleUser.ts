export interface IScheduleUser {
    idScheduleUser: string;
    idUser: string;
    idEvent: string;
    createdAt: Date;
    updatedAt: Date;
}

export class ScheduleUser {
    public idScheduleUser: string;
    public idUser: string;
    public idEvent: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(scheduleUser: IScheduleUser) {
        this.idScheduleUser = scheduleUser.idScheduleUser;
        this.idUser = scheduleUser.idUser;
        this.idEvent = scheduleUser.idEvent;
        this.createdAt = scheduleUser.createdAt;
        this.updatedAt = scheduleUser.updatedAt;
    }
}