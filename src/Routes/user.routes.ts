import { Router } from "express";
import { deleteController } from "../Controllers/deleteUser.controller";
import { listUsersController } from "../Controllers/listUsers.controller";
import { updateController } from "../Controllers/updateUser.controller";
import { createUserController } from "../Controllers/user.controllers";
import schemaMiddleware from "../Middleware/schema.middleware";
import { tokenMiddleware } from "../Middleware/token.middleware";
import { updateMiddleware } from "../Middleware/update.middleware";

import {patchSchema} from "../Schemas/patch.schema";
import { userSchema } from "../Schemas/user.schema";


const userRoutes = Router();

userRoutes.post("",schemaMiddleware(userSchema),createUserController);
userRoutes.get("",tokenMiddleware, listUsersController);
userRoutes.patch("/:id",updateMiddleware, schemaMiddleware(patchSchema),tokenMiddleware, updateController);
userRoutes.delete("/:id",tokenMiddleware, deleteController);


export default userRoutes;