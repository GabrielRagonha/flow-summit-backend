import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";
import { Event } from "../Event";

export class CreateEventUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute(
        id_user: string,
        newEvent: Omit<Event, "idEvent" | "createdAt" | "updatedAt">
    ) {
        const event = this.eventRepository.create({
            idCoordinator: id_user,
            name: newEvent.name,
            description: newEvent.description,
            startDate: newEvent.startDate,
            endDate: newEvent.endDate
        });
        return event;
    }
}
