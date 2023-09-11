// paypal_router.js

import { Router } from "express";
import { createOrder, capturePayment } from "../controllers/paypal/paypal_functions.js"; // Importa las funciones de PayPal desde tu archivo correspondiente

const paypal_router = Router();

paypal_router.post("/create-paypal-order", async (req, res) => {
    const order = await createOrder();
    res.json(order);
});

paypal_router.post("/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    const captureData = await capturePayment(orderID);
    res.json(captureData);
});

export default paypal_router;
