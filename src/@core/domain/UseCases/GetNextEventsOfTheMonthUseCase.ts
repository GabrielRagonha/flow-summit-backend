import { IEventsRepository } from "../../infrastructure/interfaces/IEventRepository";


export class GetNextEventsOfTheMonthUseCase {
    private eventRepository: IEventsRepository;

    constructor(eventRepository: IEventsRepository) {
        this.eventRepository = eventRepository;
    }

    execute() {
        const events = this.eventRepository.getNextEventsOfTheMonth();
        return events;
    }
}