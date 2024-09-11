import express from "express";
import { Transaction, TransactionType } from "../entities/Transaction";
import { Client } from "../entities/Client";

const router = express.Router();

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params;

    const { type, amount } = req.body;

    const client = await Client.findOneBy({ id: parseInt(clientId) });

    if (!client) {
        return res.json({ 
            msg: "client not found" 
        });
    }

    const transaction = Transaction.create({
        type,
        amount,
        client
    });

    await transaction.save();

    if (type === TransactionType.DEPOSIT) {
        client.balance += amount;
    } else if (type === TransactionType.WITHDRAW) {
        client.balance -= amount;
    }

    await client.save();

    return res.json({
        msg: "transaction completed",
    });
});

export { router as createTransactionRouter };