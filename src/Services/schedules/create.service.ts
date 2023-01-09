import AppDataSource from "../../data-source";
import { Propertie } from "../../entities/properties.entities";
import { Schedules } from "../../entities/schedules.user.properties.entities";
import { Users } from "../../entities/user.entities";
import { AppError } from "../../Errors/error";
import { IScheduleRequest } from "../../interfaces/schedules";




export const createSchedulesService = async (data:IScheduleRequest, idUser:string) =>{

    if(data.hour < "08:00" || data.hour > "18:00"){
        throw new AppError("Horário de funcionamento (08:00 as 18:00)", 400)
    }

    const date = new Date(data.date);
    const day = date.getDay()

    if(day === 0 || day === 6){
        throw new AppError("Funcionamento de seg á sex", 400)
    }


    const propertiesRepository = AppDataSource.getRepository(Propertie);
    const userRepository = AppDataSource.getRepository(Users);
    const schedulesRepository = AppDataSource.getRepository(Schedules);

    const findProperties = await propertiesRepository.findOneBy({
        id:data.propertyId
    });

    if(!findProperties){
        throw new AppError("Properties not already exist", 404)
    }

    const findUser = await userRepository.findOneBy({
        id:idUser
    });

    if(!findUser){
        throw new AppError("User not already exist", 404)
    }

    const findSchedules = await schedulesRepository.findOneBy({
        hour:data.hour,
        date:data.date
    });

    if(findSchedules){
        throw new AppError("Visita já marcada", 409)
    }

    const createSchedules = schedulesRepository.create({
        ...data,
        property:findProperties,
        user:findUser
    });

    await schedulesRepository.save(createSchedules);

    
    return {message: "Schedule created"};
  
}