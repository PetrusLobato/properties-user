import { Response, Request } from "express";
import { listSchedulesService } from "../../Services/schedules/list.service";




export const listSchedulesController = async (req:Request, res:Response) => {
  
   const userResponse = await listSchedulesService(req.params.id);
   
   return res.status(200).json(userResponse);

}