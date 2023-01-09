import { Router } from "express";
import { createCategoriesController } from "../Controllers/categories/create.controller";
import { listCategoriesController } from "../Controllers/categories/list.controller";
import { listPropertiesCategoriesController } from "../Controllers/categories/list.properties.controller";
import { admMiddleware } from "../Middleware/adm.middleware";
import schemaMiddleware from "../Middleware/schema.middleware";
import { tokenMiddleware } from "../Middleware/token.middleware";
import categoriesSchema from "../Schemas/categories.shema";



const categoriesRoutes = Router();

categoriesRoutes.post("", tokenMiddleware, admMiddleware, schemaMiddleware(categoriesSchema), createCategoriesController );
categoriesRoutes.get("/:id/properties", listPropertiesCategoriesController);
categoriesRoutes.get("", listCategoriesController)



export default categoriesRoutes;