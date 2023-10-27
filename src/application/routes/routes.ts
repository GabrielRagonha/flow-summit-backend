import { Router as ExpressRouter } from "express";
import { userRoutes } from "./user.routes";
import { eventsRoutes } from "./events.routes";

export const setupRoutes = (router: ExpressRouter) => {

    router.get("/", (req, res) => {
        res.send("Hello World");
    })

    router.get("/user/auth/", (req, res) => {
        res.send("Hello World");
    })

    userRoutes(router);
    eventsRoutes(router);

    return router;
};
