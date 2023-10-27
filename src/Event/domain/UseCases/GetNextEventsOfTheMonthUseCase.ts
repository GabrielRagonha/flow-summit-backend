import { EventRepository } from "../../infrastructure/repositories/EventRepository";


export class GetNextEventsOfTheMonthUseCase {
    private eventRepository: EventRepository;

    constructor(eventRepository: EventRepository) {
        this.eventRepository = eventRepository;
    }

    execute() {
        const events = this.eventRepository.getNextEventsOfTheMonth();
        return events;
    }
}