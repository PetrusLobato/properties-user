import AppDataSource from "../../data-source"
import { Propertie } from "../../entities/properties.entities"
import { Schedules } from "../../entities/schedules.user.properties.entities";
import { AppError } from "../../Errors/error";



export const listSchedulesService = async (idProp:string)=>{


 
   const propertieRepository = AppDataSource.getRepository(Propertie);
   const schedulesRepository = AppDataSource.getRepository(Schedules);


   const findProp = await propertieRepository.findOneBy({
      id: idProp,
  });

  if(!findProp){
      throw new AppError("Property Not Found", 404)
  }

   const propert = await schedulesRepository.createQueryBuilder("schedules_users_properties")
   .innerJoinAndSelect("schedules_users_properties.property", "property")
   .innerJoinAndSelect("schedules_users_properties.user", "user")
   .where("schedules_users_properties.property = :id",{id:idProp})
   .getMany()

  
   return {"schedules": propert} 

   // -------------------------------------------
   // const propertieRepository = AppDataSource.getRepository(Propertie);

   // const findPropertie = await propertieRepository.findOne({
   //    where:{
   //       id:idProp
   //    },
   //    relations:{
   //       schedules:true
   //    }
   // })

   // if(!findPropertie){
   //    throw new AppError("Property Not Found", 404)
   // }
  
   // return findPropertie;
   // -------------------------------------------


   //    const propertieRepository = await AppDataSource.createQueryBuilder().select("properties").from(Propertie, "properties").where("properties.id = :id",{id:idProp}).getOne()

   //   if(propertieRepository == null){
   //    throw new AppError("Property Not Found", 404)
   //   }



   //    return propertieRepository



}