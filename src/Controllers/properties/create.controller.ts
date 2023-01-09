import { Response, Request } from "express";
import { createPropertieService } from "../../Services/properties/create.service";



export const createPropertieController = async (req:Request, res:Response) => {
  
   const userResponse = await createPropertieService(req.body);
   
   return res.status(201).json(userResponse);

}



