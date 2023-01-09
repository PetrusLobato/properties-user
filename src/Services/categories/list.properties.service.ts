import AppDataSource from "../../data-source"
import { Categore } from "../../entities/categories.entities"
import { Propertie } from "../../entities/properties.entities";
import { AppError } from "../../Errors/error";




export const listPropertiesCategoriesService = async (idCategory:string) =>{

  const categoryRepository = AppDataSource.getRepository(Categore);

    const propertiesLostCategory = await categoryRepository.findOne({
        where:{
            id:idCategory
        },
        relations: {
            properties:true
        }
    })

    if(!propertiesLostCategory){
        throw new AppError("Category not found", 404)
    }

    return propertiesLostCategory

}