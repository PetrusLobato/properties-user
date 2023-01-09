import * as yup from "yup";
import {SchemaOf} from "yup";
import { IPropertyRequest } from "../interfaces/properties";



const propertieSchema: SchemaOf<IPropertyRequest> = yup.object().shape({
    value:yup.number().required("Value Obrigatória"),
    size:yup.number().required("Size Obrigatória"),
    categoryId:yup.string().required("Id de categoria Obrigatória"),
    address:yup.object().shape(
    {
        district: yup.string().required(),
        zipCode: yup.string().required(),
        number: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().required() 
    })
})


export default propertieSchema;