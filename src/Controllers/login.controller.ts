import { Request, Response } from "express";
import { loginService } from "../Services/login/login.service";



export const loginController = async (req: Request, res:Response) =>{

    const token = await loginService(req.body);

    return res.status(200).json({token})


}