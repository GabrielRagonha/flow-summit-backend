import { Router as ExpressRouter } from "express";
import { UserController } from "../controllers/UserController";

export const userRoutes = (router: ExpressRouter) => {
    const userController = new UserController();

    router.post("/user/login", userController.login);
};
