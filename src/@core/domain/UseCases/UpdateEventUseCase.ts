import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";
import { Event } from "../Event";

export class UpdateEventUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute(updateEvent: Omit<Event, "createdAt" | "updatedAt">) {
        const event = this.eventRepository.updateEvent(updateEvent);
        return event;
    }
}
