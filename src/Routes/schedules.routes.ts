import { Router } from "express";
import { createSchedulesController } from "../Controllers/schedules/create.controller";
import { listSchedulesController } from "../Controllers/schedules/list.controller";
import { admMiddleware } from "../Middleware/adm.middleware";
import schemaMiddleware from "../Middleware/schema.middleware";
import { tokenMiddleware } from "../Middleware/token.middleware";
import scheduleSchema from "../Schemas/schedules.schema";





const schedulesRoutes = Router();

schedulesRoutes.post("",tokenMiddleware, schemaMiddleware(scheduleSchema), createSchedulesController);
schedulesRoutes.get("/properties/:id", tokenMiddleware, admMiddleware, listSchedulesController);



export default schedulesRoutes;