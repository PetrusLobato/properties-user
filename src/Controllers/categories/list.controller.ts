import { Response, Request } from "express";
import { listCategoriesService } from "../../Services/categories/list.service";




export const listCategoriesController = async (req:Request, res:Response) => {
  
   const userResponse = await listCategoriesService();
   
   return res.status(200).json(userResponse);

}