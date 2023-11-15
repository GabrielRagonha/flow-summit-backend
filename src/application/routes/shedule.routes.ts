import { Router as ExpressRouter } from "express";
import { ScheduleUserController } from "../controllers/SheduleUserController";

export const scheduleRoutes = (router: ExpressRouter) => {
    const scheduleUserController = new ScheduleUserController();

    router.get("/schedules_all", async (req, res) => {
        try {
            const schedules = await scheduleUserController.getAllSchedules();
            res.json(schedules);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.get("/schedules/:idScheduleUser", async (req, res) => {
        try {
            const schedule = await scheduleUserController.getScheduleById(
                req.params.idScheduleUser
            );
            res.json(schedule);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.post("/schedules", async (req, res) => {
        try {
            const schedule = await scheduleUserController.createSchedule(
                req.body
            );
            res.json(schedule);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.put("/schedules", async (req, res) => {
        try {
            const schedule = await scheduleUserController.updateSchedule(
                req.body
            );
            res.json(schedule);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    router.delete("/schedules/:idScheduleUser", async (req, res) => {
        try {
            await scheduleUserController.deleteSchedule(
                req.params.idScheduleUser
            );
            res.json({ message: "Schedule deleted successfully" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
};
