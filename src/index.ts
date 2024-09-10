import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
    entities: [Client, Banker],
    synchronize: true
});

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to Postgres");
    } catch (error) {
        console.error(error);
        throw new Error("Unable to connect to db");
    }
};

main()