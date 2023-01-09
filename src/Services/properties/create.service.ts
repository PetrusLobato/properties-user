import AppDataSource from "../../data-source"
import { Addresse } from "../../entities/addresses.entities";
import { Categore } from "../../entities/categories.entities";
import { Propertie } from "../../entities/properties.entities";
import { AppError } from "../../Errors/error";
import { IPropertyRequest } from "../../interfaces/properties";



export const createPropertieService = async (data:IPropertyRequest):Promise<Propertie> =>{

   
    const propertieRepository = AppDataSource.getRepository(Propertie);
    const addressRepository = AppDataSource.getRepository(Addresse);
    const categoryRepository = AppDataSource.getRepository(Categore);


    const categoryVerification = await categoryRepository.findOneBy({
        id:data.categoryId
    })

    if(!categoryVerification){
        throw new AppError("Category not already exists", 404)
    }

    if(data.address.state.length > 2){
        throw new AppError("State length >2", 400)
    }

    if(data.address.zipCode.length > 8){
        throw new AppError("ZipCode length > 8", 400)
    }

    const addressVerification = await addressRepository.findOneBy({
        zipCode:data.address.zipCode
    })

    if(addressVerification){
        throw new AppError("Address already exists", 409)
    }

  
    const addressCreate = addressRepository.create(data.address);
    const addressRespose =  await addressRepository.save(addressCreate);

    const propertieCreate = propertieRepository.create({...data, address:addressRespose, category:categoryVerification });
    await propertieRepository.save(propertieCreate);
  
   return propertieCreate
}