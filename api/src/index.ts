import express, {Request, Response} from "express";
import * as dotenv from "dotenv";
import { connectDb } from "./db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const db = await connectDb();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world !");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})