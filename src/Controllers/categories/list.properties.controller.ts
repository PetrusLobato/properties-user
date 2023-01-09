import { Response, Request } from "express";
import { listPropertiesCategoriesService } from "../../Services/categories/list.properties.service";





export const listPropertiesCategoriesController = async (req:Request, res:Response) => {
  
   const userResponse = await listPropertiesCategoriesService(req.params.id);
   
   return res.status(200).json(userResponse);

}