import { Router } from "express";
import { loginController } from "../Controllers/login.controller";
import schemaMiddleware from "../Middleware/schema.middleware";
import loginSchema from "../Schemas/login.schema";


const loginRoutes = Router();

loginRoutes.post("",schemaMiddleware(loginSchema), loginController)


export default loginRoutes;