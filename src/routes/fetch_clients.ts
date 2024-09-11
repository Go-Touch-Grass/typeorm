import express from "express";
import { Client } from "../entities/Client";
import { AppDataSource } from "../index";

const router = express.Router();

router.get("/api/client", async (req, res) => {
    const client = await AppDataSource.createQueryBuilder()
    .select("client.first_name")
    .addSelect("client.balance")
    .from(Client, "client")
    .leftJoinAndSelect("client.transactions", "transactions")
    .where("client.balance >= :minBalance AND client.balance <= :maxBalance", 
        { 
            minBalance: 100,
            maxBalance: 5000
        })
    .getMany();

    res.json(client);
});

export { router as fetchClientsRouter };