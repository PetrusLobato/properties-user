import AppDataSource from "../../data-source"
import { Categore } from "../../entities/categories.entities"
import { AppError } from "../../Errors/error";
import {ICategoryRequest} from "../../interfaces/categories/index"




export const createCategoriesService = async (date:ICategoryRequest):Promise<Categore> =>{

    const categoryRepository = AppDataSource.getRepository(Categore);

    const findCategory = await categoryRepository.findOneBy({
        name:date.name
    })

  
    if(findCategory){

        throw new AppError("Name already exists", 409)
    }

    const newCategory = categoryRepository.create({...date});

    await categoryRepository.save(newCategory);

    return newCategory;
}