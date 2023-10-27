import { GetNextEventsOfTheMonthUseCase } from "../../Event/domain/UseCases/GetNextEventsOfTheMonthUseCase";
import { EventRepository } from "../../Event/infrastructure/repositories/EventRepository";

export class EventController {
    private eventRepository: EventRepository;
    private getNextEventsOfTheMonthUseCase: GetNextEventsOfTheMonthUseCase

    constructor() {
        this.eventRepository = new EventRepository();
        this.getNextEventsOfTheMonthUseCase = new GetNextEventsOfTheMonthUseCase(this.eventRepository);
    }

    async getNextEventsOfTheMonth() {
        const events = await this.getNextEventsOfTheMonthUseCase.execute();
        return events;
    }
}