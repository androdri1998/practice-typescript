import { Router, RouterOptions } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);

export default routes;
