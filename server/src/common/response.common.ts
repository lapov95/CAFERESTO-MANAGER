import { Response } from "express";
import { HttpStatusCode } from "./statusCode.common";

export class AppResponse {
    
    static notImplemented(res: Response) {
        const statusCode:HttpStatusCode = HttpStatusCode.NOT_IMPLEMENTED;
        res.status(statusCode).send({
            success: false,
            statusCode: statusCode,
            message: 'This API is not implemented yet!'
        });
    }

}
