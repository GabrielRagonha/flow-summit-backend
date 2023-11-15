import { GetNextEventsOfTheMonthUseCase } from "../../@core/domain/UseCases/Event/GetNextEventsOfTheMonthUseCase";
import { EventRepository } from "../../@core/infrastructure/repositories/EventRepository";

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

    async createEvent(event: any) {
        const newEvent = await this.eventRepository.create(event);
        return newEvent;
    }

    async updateEvent(event: any) {
        const updatedEvent = await this.eventRepository.updateEvent(event);
        return updatedEvent;
    }

    async deleteEvent(idEvent: string) {
        const deletedEvent = await this.eventRepository.deleteEvent(idEvent);
        return deletedEvent;
    }

    async getEventById(idEvent: string) {
        const event = await this.eventRepository.getEventById(idEvent);
        return event;
    }

    async getAllEvents() {
        const events = await this.eventRepository.getAllEvents();
        return events;
    }
}