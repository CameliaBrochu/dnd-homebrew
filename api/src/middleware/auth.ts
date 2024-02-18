import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const authenticateToken = (req: Request, res: Response, next: any) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(!token || !process.env.TOKEN_SECRET){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.TOKEN_SECRET, () =>{
        
        next();
    })
}
