import AppDataSource from "../../data-source"
import { Categore } from "../../entities/categories.entities"




export const listCategoriesService = async () =>{

    const categoryRepository = AppDataSource.getRepository(Categore);

    const allCategory =  await categoryRepository.find();
    //find({ relations:{ adrress:true  }}) => Quando eu quero retornar também as relações de tabelas ligadas 
    // withDeleted:true => Relaciona também os usuruários deletados

    return allCategory;
}