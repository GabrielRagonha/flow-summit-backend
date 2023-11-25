import { NextFunction, Request, Response } from "express";
import { verify, TokenExpiredError } from "jsonwebtoken";
import { Environment } from "../../shared.kernel/environment";

async function isAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(406).json({
            msg: "token.invalid",
        });
    }

    try {
        const [, token] = authToken.split(" ");
        verify(token, Environment.jwt_secret);
        return next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return response.status(406).json({
                error: "token.expired",
            });
        }
        return response.status(406).json({
            error,
        });
    }
}

export { isAuthenticate };
