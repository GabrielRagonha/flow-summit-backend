import { Router as ExpressRouter } from "express";
import { userRoutes } from "./user.routes";
import { eventsRoutes } from "./events.routes";
import { scheduleRoutes } from "./shedule.routes";

export const setupRoutes = (router: ExpressRouter) => {

    router.get("/", (req, res) => {
        res.send("Hello World");
    })

    router.get("/user/auth/", (req, res) => {
        res.send("Hello World");
    })

    userRoutes(router);
    eventsRoutes(router);
    scheduleRoutes(router)

    return router;
};
