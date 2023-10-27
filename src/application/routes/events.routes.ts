import { Router as ExpressRouter } from "express";
import { EventController } from "../controllers/EventController";

export const eventsRoutes = (router: ExpressRouter) => {
    const userController = new EventController();

    router.get("/events", async (req, res) => {
        try {
            const events = await userController.getNextEventsOfTheMonth();
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
};
