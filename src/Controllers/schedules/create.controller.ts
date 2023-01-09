import { Response, Request } from "express";
import { createSchedulesService } from "../../Services/schedules/create.service";




export const createSchedulesController = async (req:Request, res:Response) => {
  
   const userResponse = await createSchedulesService(req.body, req.user.id.toString());
   
   return res.status(201).json(userResponse);

}
