import * as yup from "yup";
import {SchemaOf} from "yup";
import { ICategoryRequest } from "../interfaces/categories";


const categoriesSchema: SchemaOf<ICategoryRequest> = yup.object().shape({
    name:yup.string().required("Name obrigatória"),
})


export default categoriesSchema;