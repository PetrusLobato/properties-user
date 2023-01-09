import { Response, Request } from "express";
import { listPropertieService } from "../../Services/properties/list.service";




export const listPropertieController = async (req:Request, res:Response) => {
  
   const userResponse = await listPropertieService();
   
   return res.status(200).json(userResponse);

}
