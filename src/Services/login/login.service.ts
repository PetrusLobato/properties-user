import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entities";
import  jwt  from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { AppError } from "../../Errors/error";




export const loginService = async (data:IUserLogin):Promise <string> =>{

    const methodRepository = AppDataSource.getRepository(Users);

    const user = await methodRepository.findOneBy({email: data.email});

    
    if(!user){
        throw new AppError("User or password invalid", 401)
    }

    if(!user.isActive){
        throw new AppError("User disabled", 400)
    }

    const passawordMatch = await compare(data.password, user.password);
    
    if(!passawordMatch){
        throw new AppError("User or password invalid", 403)
    }

    const token = jwt.sign(
    {
        isAdm:user.isAdm
    }, 
        process.env.SECRET_KEY,
    {
        subject:user.id,
        expiresIn:'24h'
    })

    return token
}