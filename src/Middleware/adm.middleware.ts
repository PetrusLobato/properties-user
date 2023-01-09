import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/user.entities";
import { AppError } from "../Errors/error";


export const admMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  const userId = req.user.id.toString()

  const methodRepository = AppDataSource.getRepository(Users);


  const adm = await methodRepository.findOneBy({id:userId});

  if(adm.isAdm == false){
      throw new AppError( "User not permission", 403)
  }

  return next();
};