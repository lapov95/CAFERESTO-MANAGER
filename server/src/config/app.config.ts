import { PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
import { CategoryRoutes } from '../routes/category.route';

export class AppConfig {
    API: string;
    HOST: string;
    PORT: number;
    NODE_ENV: string;
    DB_CONFIG: PoolOptions;

    constructor(){
        dotenv.config();
        this.API = `/api/${process.env.VERSION}`;
        this.PORT = Number(process.env.PORT);
        this.HOST = process.env.HOST || 'localhost';
        this.NODE_ENV = process.env.NODE_ENV as string;
        this.DB_CONFIG = {
            port: Number(process.env.DB_PORT),
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        }
    }

    public routes(): any[] {
        return [
            new CategoryRoutes()
        ]
    }

}

