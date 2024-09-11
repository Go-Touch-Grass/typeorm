import express from "express";
import { Banker } from "../entities/Banker";
import { Client } from "../entities/Client";
import { AppDataSource } from "../index";

const router = express.Router();

router.put("/api/banker/:bankerId/client/:clientId", async (req, res) => {
    const { bankerId, clientId } = req.params;

    const banker = await Banker.findOneBy({ id: parseInt(bankerId) });
    const client = await Client.findOneBy({ id: parseInt(clientId) });

    if (!banker || !client) {
        return res.json({
            msg: "banker or client not found"
        });
    };

    await AppDataSource.createQueryBuilder()
        .relation(Banker, "clients")
        .of(banker)
        .add(client);

    return res.json({
        msg: "banker connected to client"
    });
});

export { router as connectBankerToClientRouter };