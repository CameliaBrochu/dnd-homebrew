import express, {Request, Response } from "express";
import * as dotenv from "dotenv";
import ItemRouter from "./router/item";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/items", ItemRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world !");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})