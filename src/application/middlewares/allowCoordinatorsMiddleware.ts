import { Request, Response, NextFunction } from "express";
import { createPrismaClient } from "../../shared.kernel/prisma";

export async function allowCoordinatorsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const prisma = createPrismaClient();

    const { idCoordinator } = req.body;

    const user = await prisma.coordinator.findUnique({
        where: {
            idCoordinator: idCoordinator,
        },
    });

    if (!user) {
        return res
            .status(403)
            .json({ error: "Acesso negado: o usuário não é um coordenador" });
    }

    next();
}
