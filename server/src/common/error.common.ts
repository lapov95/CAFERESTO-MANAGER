import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppResponse } from "./response.common";

export class AppError extends Error {
    status: number;

    constructor(message: string, statusCode: number = 200){
        super(message);
        this.status = statusCode
    }

    static errorHandler:ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
        AppResponse.notImplemented(res)
    }
}

// Error: Unknown database 'process.env.db_database'
//     at Packet.asError (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\packets\packet.js:740:17)
//     at ClientHandshake.execute (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\commands\command.js:29:26)
//     at PoolConnection.handlePacket (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\base\connection.js:475:34)
//     at PacketParser.onPacket (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\base\connection.js:93:12)
//     at PacketParser.executeStart (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\packet_parser.js:75:16)
//     at Socket.<anonymous> (C:\Users\Toni\Desktop\PROJECTS\CAFERESTO-MANAGER\server\node_modules\mysql2\lib\base\connection.js:100:25)
//     at Socket.emit (node:events:518:28)
//     at addChunk (node:internal/streams/readable:561:12)
//     at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
//     at Readable.push (node:internal/streams/readable:392:5) {
//   code: 'ER_BAD_DB_ERROR',
//   errno: 1049,
//   sqlState: '42000',
//   sqlMessage: "Unknown database 'process.env.db_database'",
//   sql: undefined