import { Router as ExpressRouter } from "express";
import { UserController } from "../controllers/UserController";

export const userRoutes = (router: ExpressRouter) => {
    const userController = new UserController();

    router.post("/user/login", async (req, res) => {
        const { email, password } = req.body;

        try {
            const token = await userController.login({ email, password });
            return res.status(200).json({ token });
            
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    });

    router.post("/user/signup", async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const token = await userController.signup({ name, email, password });
            return res.status(200).json({ "joia": "joia👍" });
            
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    });

    return router;
};
