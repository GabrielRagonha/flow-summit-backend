import { Event } from "../../domain/Event"

export interface IEventsRepository {
    getNextEventsOfTheMonth(): Promise<Event[]>
}