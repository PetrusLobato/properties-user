import { Response, Request } from "express";
import { createCategoriesService } from "../../Services/categories/create.service";




export const createCategoriesController = async (req:Request, res:Response) => {
  
   const userResponse = await createCategoriesService(req.body);
   

   return res.status(201).json(userResponse);

}