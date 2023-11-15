import { createPrismaClient } from "../../../shared.kernel/prisma";
import { Event } from "../../domain/Event";
import { IEventsRepository } from "../interfaces/IEventRepository";

export class EventRepository implements IEventsRepository {
    private prisma = createPrismaClient();
    private events: Event[] = [];

    public async getNextEventsOfTheMonth(): Promise<Event[]> {
        this.events = [];

        const events = await this.prisma.event.findMany({
            where: {
                start_date: {
                    gte: new Date(),
                },
            },
            orderBy: {
                start_date: "asc",
            },
        });

        events.forEach((evento) => {
            this.events.push(
                new Event({
                    idEvent: evento.idEvent,
                    name: evento.name,
                    description: evento.description,
                    startDate: evento.start_date,
                    endDate: evento.end_date,
                    idCoordinator: evento.idCoordinator,
                    createdAt: evento.createdAt,
                    updatedAt: evento.updatedAt,
                })
            );
        });

        return this.events;
    }

    public async create(
        event: Omit<Event, "idEvent" | "createdAt" | "updatedAt">
    ): Promise<Event> {
        console.log(event);

        const newEvent = await this.prisma.event.create({
            data: {
                name: event.name,
                description: event.description,
                start_date: event.startDate,
                end_date: event.endDate,
                idCoordinator: event.idCoordinator,
            },
        });

        return new Event({
            idEvent: newEvent.idEvent,
            name: newEvent.name,
            description: newEvent.description,
            startDate: newEvent.start_date,
            endDate: newEvent.end_date,
            idCoordinator: newEvent.idCoordinator,
            createdAt: newEvent.createdAt,
            updatedAt: newEvent.updatedAt,
        });
    }

    public async deleteEvent(idEvent: string): Promise<void> {
        await this.prisma.event.delete({
            where: {
                idEvent,
            },
        });
    }

    public async getEventById(idEvent: string): Promise<Event> {
        const event = await this.prisma.event.findUnique({
            where: {
                idEvent: idEvent,
            },
        });

        if (!event) throw new Error("Event not found");

        return new Event({
            idEvent: event.idEvent,
            name: event.name,
            description: event.description,
            startDate: event.start_date,
            endDate: event.end_date,
            idCoordinator: event.idCoordinator,
            createdAt: event.createdAt,
            updatedAt: event.updatedAt,
        });
    }

    public async    updateEvent(
        updateEvent: Omit<Event, "createdAt" | "updatedAt">
    ): Promise<Event> {
        const event = await this.prisma.event.update({
            data: {
                name: updateEvent.name,
                description: updateEvent.description,
                start_date: updateEvent.startDate,
                end_date: updateEvent.endDate,
            },
            where: {
                idEvent: updateEvent.idEvent,
            },
        });

        return new Event({
            idEvent: event.idEvent,
            name: event.name,
            description: event.description,
            startDate: event.start_date,
            endDate: event.end_date,
            idCoordinator: event.idCoordinator,
            createdAt: event.createdAt,
            updatedAt: event.updatedAt,
        });
    }

    public async getAllEvents(): Promise<Event[]> {
        this.events = [];

        const events = await this.prisma.event.findMany();

        events.forEach((evento) => {
            this.events.push(
                new Event({
                    idEvent: evento.idEvent,
                    name: evento.name,
                    description: evento.description,
                    startDate: evento.start_date,
                    endDate: evento.end_date,
                    idCoordinator: evento.idCoordinator,
                    createdAt: evento.createdAt,
                    updatedAt: evento.updatedAt,
                })
            );
        });

        return this.events;
    }
}
