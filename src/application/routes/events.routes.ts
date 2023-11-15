import { Router as ExpressRouter } from "express";
import { EventController } from "../controllers/EventController";
import { allowCoordinatorsMiddleware } from "../middlewares/allowCoordinatorsMiddleware";

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

    router.get("/events_all", async (req, res) => {
        try {
            const events = await userController.getAllEvents();
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.get("/events/:idEvent", async (req, res) => {
        try {
            const events = await userController.getEventById(req.params.idEvent);
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.post("/events", allowCoordinatorsMiddleware, async (req, res) => {
        try {
            const event = await userController.createEvent(req.body);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.put("/events", allowCoordinatorsMiddleware, async (req, res) => {
        try {
            const event = await userController.updateEvent(req.body);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.delete("/events/:idEvent", allowCoordinatorsMiddleware, async (req, res) => {
        try {
            const event = await userController.deleteEvent(req.params.idEvent);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
};
