import { createPrismaClient } from "../../../shared.kernel/prisma";
import { Event } from "../../domain/Event";
import { IEventsRepository } from "../interfaces/IEventRepository";

export class EventRepository implements IEventsRepository {
    private prisma = createPrismaClient();
    private events: Event[] = [];

    public async getNextEventsOfTheMonth(): Promise<Event[]> {
        const events = await this.prisma.event.findMany({
            where: {
                start_date: {
                    gte: new Date()
                }
            },
            orderBy: {
                start_date: 'asc'
            }
        })
        
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
                    updatedAt: evento.updatedAt
                })
            )
        })

        return this.events

    }

}
