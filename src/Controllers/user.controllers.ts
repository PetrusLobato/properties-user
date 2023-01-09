import { Response, Request } from "express";
import { createUserService } from "../Services/user/createUser.service";



export const createUserController = async (req:Request, res:Response) => {
  
   const userResponse = await createUserService(req.body)

   return res.status(201).json(userResponse);

}

