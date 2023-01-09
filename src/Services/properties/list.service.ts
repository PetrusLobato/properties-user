import AppDataSource from "../../data-source"
import { Propertie } from "../../entities/properties.entities"




export const listPropertieService = async () =>{

    const propertieRepository = AppDataSource.getRepository(Propertie);

    const findPropertie = await propertieRepository.find({
        relations:{
            address:true
        }
    });

    return findPropertie
   
}