import { Application } from "express";
import AddCardController from "./AddCard";

export function cardRoutes(app: Application) {
  app.post('/card', new AddCardController().handle)
}