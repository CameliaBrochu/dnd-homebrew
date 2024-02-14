import express, {Request, Response } from "express";
import * as dotenv from "dotenv";
import AppRouter from "@/router/router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", AppRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})