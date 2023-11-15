import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";
import { Event } from "../Event";

export class GetEventUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute(eventId: string) {
        const events = this.eventRepository.getEventById(eventId);
        return events;
    }
}
