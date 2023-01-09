import * as yup from "yup";
import {SchemaOf} from "yup";
import { IUserLogin } from "../interfaces/users";

const loginSchema: SchemaOf<IUserLogin> = yup.object().shape({
    email:yup.string().required("Email Obrigatória"),
    password:yup.string().required("password Obrigatória")
   
})


export default loginSchema;