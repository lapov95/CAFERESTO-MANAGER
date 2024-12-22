import express, { Application } from "express";
import { AppConfig } from "./config/app.config";
import { ApplicationDatabase } from "./config/database.config";
import { AppError } from "./common/error.common";

export default class App {
    private appConfig: AppConfig;
    private port: number;
    private host: string;
    public app: Application;
    
    constructor() {
        this.appConfig = new AppConfig();
        this.port = this.appConfig.PORT;
        this.host = this.appConfig.HOST;
        this.app = express();
        this.middlewares();
        this.runRoutes();
        this.runErrorHandler();
    }

    private middlewares(): void {
        this.app.use(express.json());
    }

    private runRoutes(): void {
        const routes = this.appConfig.routes();
        for(let i = 0; i < routes.length; i++) {
            this.app.use(this.appConfig.API, routes[i].router);
        }
    }

    private runErrorHandler(): void {
        this.app.use(AppError.errorHandler);
    }

    public async listen(): Promise<void> {
        const db = new ApplicationDatabase();
        const msg = `Server started: http://${this.host}:${this.port}`;
        await db.connection();
        this.app.listen(this.port, this.host, () => console.log(msg));
    }
}
