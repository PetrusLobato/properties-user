import AppDataSource from "../../data-source";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../Errors/error";
import { IUser } from "../../interfaces/users";
import { listUsersSchema} from "../../Schemas/user.schema";



export const listUserService = async (idAdm:string): Promise<IUser[]> =>{

    const methodRepository = AppDataSource.getRepository(Users);


    const adm = await methodRepository.findOneBy({id:idAdm});

    if(adm.isAdm == false){
        throw new AppError( "User not permission", 403)
    }
    
    const Allusers =  await methodRepository.find();
    //find({ relations:{ adrress:true  }}) => Quando eu quero retornar também as relações de tabelas ligadas 
    // withDeleted:true => Relaciona também os usuruários deletados


    const responseUsers = listUsersSchema.validate(Allusers, {
        stripUnknown: true,
      });
    
    return responseUsers;
}