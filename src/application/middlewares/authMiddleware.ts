import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Environment } from "../../shared.kernel/environment";

async function isAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response
            .json({
                msg: "token.invalid",
            })
            .status(406);
    }

    try {
        const [, token] = authToken.split(" "); 
        verify(token, Environment.jwt_secret);
        return next();
    } catch (error) {
        return response
            .json({
                error,
            })
            .status(406);
    }
}

export { isAuthenticate };
