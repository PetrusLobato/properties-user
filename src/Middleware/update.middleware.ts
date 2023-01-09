import { Request, Response, NextFunction } from "express";
import { AppError } from "../Errors/error";


export const updateMiddleware = (req: Request, res: Response, next: NextFunction) => {

  if (req.body.isAdm !== undefined || req.body.isActive !== undefined || req.body.id !== undefined ) {
    throw new AppError("Should not be able to update isAdm, isActive, id", 401);
  }
  return next();
};