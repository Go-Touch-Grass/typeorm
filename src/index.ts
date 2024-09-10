import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import express from "express";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";

dotenv.config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
    entities: [Client, Banker, Transaction],
    synchronize: true
});

const app = express();

const main = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to Postgres");
        app.use(express.json());
        app.use(createClientRouter);
        app.use(createBankerRouter);

        app.listen(8080, () => {
            console.log("Now running on port 8080");
        });
    } catch (error) {
        console.error(error);
        throw new Error("Unable to connect to db");
    }
};

main()