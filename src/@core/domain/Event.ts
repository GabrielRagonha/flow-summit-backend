export interface IEvent {
    idEvent: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    idCoordinator: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Event {
    public idEvent: string;
    public name: string;
    public description: string;
    public startDate: Date;
    public endDate: Date;
    public idCoordinator: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(event: IEvent) {
        this.idEvent = event.idEvent;
        this.name = event.name;
        this.description = event.description;
        this.startDate = event.startDate;
        this.endDate = event.endDate;
        this.idCoordinator = event.idCoordinator;
        this.createdAt = event.createdAt;
        this.updatedAt = event.updatedAt;
    }
}