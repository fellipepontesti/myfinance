import { Application } from "express";
import CreateUserController from "./CreateUserController";

export function userRoutes(app: Application) {
  app.post('/user', new CreateUserController().handle)
}