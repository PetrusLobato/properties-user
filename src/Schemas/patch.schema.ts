import * as yup from "yup";
import {SchemaOf} from "yup";
import { IUserUpdate } from "../interfaces/users";


const patchSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    email:yup.string().notRequired(),
    name:yup.string().notRequired(),
    password:yup.string().notRequired()
   
})


export {patchSchema};