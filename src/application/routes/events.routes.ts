import { Router as ExpressRouter } from "express";
import { EventController } from "../controllers/EventController";
import { allowCoordinatorsMiddleware } from "../middlewares/allowCoordinatorsMiddleware";
import { isAuthenticate } from "../middlewares/authMiddleware";

export const eventsRoutes = (router: ExpressRouter) => {
    const userController = new EventController();

    router.get("/events", isAuthenticate, async (req, res) => {
        try {
            const events = await userController.getNextEventsOfTheMonth();
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.get("/events_all", isAuthenticate, async (req, res) => {
        try {
            const events = await userController.getAllEvents();
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.get("/events/:idEvent", isAuthenticate, async (req, res) => {
        try {
            const events = await userController.getEventById(req.params.idEvent);
            res.json(events);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.post("/events", isAuthenticate, allowCoordinatorsMiddleware, async (req, res) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa")
        console.log(req.body)
        try {
            const event = await userController.createEvent(req.body);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.put("/events", isAuthenticate, allowCoordinatorsMiddleware, async (req, res) => {
        try {
            const event = await userController.updateEvent(req.body);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.delete("/events/:idEvent", isAuthenticate, allowCoordinatorsMiddleware, async (req, res) => {
        try {
            const event = await userController.deleteEvent(req.params.idEvent);
            res.json(event);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
};
