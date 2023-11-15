import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";
import { Event } from "../Event";

export class DeleteEventUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute(eventId: string) {
        const event = this.eventRepository.deleteEvent(eventId);
        return event;
    }
}
