import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../Errors/error";
import { IUser, IUserUpdate } from "../../interfaces/users/index";
import { userSchemaResponse } from "../../Schemas/user.schema";


export const updateService = async (newBody:IUserUpdate, idUser:string, idAdm:any): Promise<IUser> =>{


    const methodRepository = AppDataSource.getRepository(Users);

    const adm = await methodRepository.findOneBy({
        id:idAdm
    })

    if(idUser !== adm.id && !adm.isAdm){
        throw new AppError("User is not authorized", 401);
    }

    const user = await methodRepository.findOneBy({
        id:idUser
    })

    if (!user) {
        throw new AppError("User not exist", 404);
    }


    const updateUser = methodRepository.create({
        ...user,
        ...newBody
     })

    await methodRepository.save(updateUser);

    const responseUpdate = await userSchemaResponse.validate(updateUser,
     {
        stripUnknown:true
    })

    return responseUpdate
}