import * as yup from "yup";
import {SchemaOf} from "yup";
import {IUser, IUserRequest} from "../interfaces/users";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name:yup.string().required("Name Obrigatória"),
    email:yup.string().email().required("Email Obrigatória"),
    password:yup.string().required("password Obrigatória"),
    isAdm:yup.boolean().required("isAdm Obrigatória"),
    isActive:yup.boolean().notRequired()
})


const userSchemaResponse: SchemaOf<IUser> = yup.object().shape({
     id: yup.string().notRequired(),
     name:yup.string().notRequired(),
     email:yup.string().email().notRequired(),
     isAdm:yup.boolean().notRequired(),
     createdAt:yup.date().notRequired(),
     updatedAt: yup.date().notRequired(),
     isActive: yup.boolean().notRequired()
})

const listUsersSchema = yup.array(userSchemaResponse);

export {userSchema, userSchemaResponse, listUsersSchema}