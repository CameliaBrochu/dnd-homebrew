import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const AuthController = Router();

interface LoginRequest{
    username: String,
}

AuthController.get("/", async (req: Request<{}, {}, LoginRequest>, res: Response) => {
    if(!process.env.TOKEN_SECRET){
        throw new Error("Invalid token")
    }

    const token = jwt.sign({name: req.body.username}, process.env.TOKEN_SECRET, { expiresIn: 60 })

    res.send(token)
})


export default AuthController;