import { Request, Response } from "express";
import { listUserService } from "../Services/user/listUsers.service";




export const listUsersController = async (req:Request, res:Response) => {

   const userResponse = await listUserService(req.user.id.toString())

   return res.status(200).json(userResponse);

}
