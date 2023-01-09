import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../Errors/error";




export const deleteService = async (id:string, idAdm:any):Promise<object>=>{

    const methodRepository = AppDataSource.getRepository(Users);

    const adm = await methodRepository.findOneBy({
        id:idAdm
    })

    if(!adm.isAdm){
        throw new AppError("User is not authorized", 403);
    }

    const user = await methodRepository.findOneBy({
        id:id
    })

    if (!user) {
        throw new AppError("User not exist", 404);
    }

    if (!user.isActive) {
        throw new AppError("User is already inactive", 400);
    }

    user.isActive = false

    // await methodRepository.softRemove(user);
    await methodRepository.save(user)


    return {}
}