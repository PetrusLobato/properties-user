import { Router } from "express";
import { createPropertieController } from "../Controllers/properties/create.controller";
import { listPropertieController } from "../Controllers/properties/list.controller";
import { admMiddleware } from "../Middleware/adm.middleware";
import schemaMiddleware from "../Middleware/schema.middleware";
import { tokenMiddleware } from "../Middleware/token.middleware";
import propertieSchema from "../Schemas/propertie.schema";



const propertiesRoutes = Router();

propertiesRoutes.post("",tokenMiddleware, admMiddleware, schemaMiddleware(propertieSchema), createPropertieController);
propertiesRoutes.get("", listPropertieController);



export default propertiesRoutes;