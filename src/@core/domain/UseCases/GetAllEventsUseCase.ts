import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";

export class GetAllEventsUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute() {
        const events = this.eventRepository.getAllEvents();
        return events;
    }
}
