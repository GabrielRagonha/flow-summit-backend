import { Event } from "../../domain/Event"

export interface IEventsRepository {
    getNextEventsOfTheMonth(): Promise<Event[]>,
    getAllEvents(): Promise<Event[]>,
    getEventById(idEvent: string): Promise<Event>,
    updateEvent(event: Omit<Event, "createdAt" | "updatedAt">): Promise<Event>,
    deleteEvent(idEvent: string): Promise<void>,
    create(event: Omit<Event, "idEvent" | "createdAt" | "updatedAt">): Promise<Event>,
}