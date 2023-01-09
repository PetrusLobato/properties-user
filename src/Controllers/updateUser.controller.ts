import { Request, Response } from "express";
import { updateService } from "../Services/user/updateUser.service";




export const updateController = async (req: Request, res:Response) =>{
  
    const userResponse = await updateService(req.body, req.params.id, req.user.id)

    return res.status(200).json(userResponse)

}