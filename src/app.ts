import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./Routes/user.routes";
import loginRoutes from "./Routes/login.routes";
import { globalError } from "./Errors/error";
import propertiesRoutes from "./Routes/properties.routes";
import categoriesRoutes from "./Routes/categories.routes";
import schedulesRoutes from "./Routes/schedules.routes";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/properties", propertiesRoutes);
app.use("/categories", categoriesRoutes);
app.use("/schedules", schedulesRoutes);



app.use(globalError);


export default app