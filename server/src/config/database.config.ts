import { AppConfig } from "./app.config";
import mysql, { PoolOptions, Pool } from 'mysql2/promise';

export class ApplicationDatabase {
    private appConfig: AppConfig;
    private dbConfig: PoolOptions;
    public db: Pool;

    constructor(){
        this.appConfig = new AppConfig();
        this.dbConfig = this.appConfig.DB_CONFIG;
        this.db = mysql.createPool(this.dbConfig);
    }

    public async connection(): Promise<void> {
        try {
            const connection = await this.db.getConnection();
            console.log("Database is connected");   
        } catch (error) {
            console.log("Database failed to connect");
            console.log("Error:");
            console.log(error);
            process.exit(0);
        }
    }

}

