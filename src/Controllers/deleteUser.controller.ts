import { Request, Response } from "express";
import { deleteService } from "../Services/user/deleteUser.service";





export const deleteController = async (req:Request, res:Response) => {

   const userResponse = await deleteService(req.params.id, req.user.id)

   return res.status(204).json(userResponse);

}
