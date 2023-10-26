import { Router as ExpressRouter } from "express";
import { userRoutes } from "./user.routes";

export const setupRoutes = (router: ExpressRouter) => {

    router.get("/", (req, res) => {
        res.send("Hello World");
    })

    router.get("/user/auth/", (req, res) => {
        res.send("Hello World");
    })

    userRoutes(router)
    return router;
};
