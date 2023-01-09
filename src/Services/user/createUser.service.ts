import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entities";
import {  userSchemaResponse } from "../../Schemas/user.schema";
import { AppError } from "../../Errors/error";


export const createUserService = async (newData:IUserRequest): Promise<IUser> =>{


    const methodRepository = AppDataSource.getRepository(Users);

    const findUser = await methodRepository.findOneBy({
        email:newData.email
    })

  

    if(findUser){

        throw new AppError("Email already exists", 409)
    }

    const user = methodRepository.create(newData);

    await methodRepository.save(user);

    const responseUser = await userSchemaResponse.validate(user,{
        stripUnknown:true
    })

    return responseUser;

}