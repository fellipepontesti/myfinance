import { Application } from "express";
import { userRoutes } from "../controllers/User/main";
import { cardRoutes } from "../controllers/Card/main";

export class Routes {
  loadRoutes (app: Application) {

    userRoutes(app)
    cardRoutes(app)
    
    app.get('/', (req, res) => {
      res.send('hello world')
    })
  }
  
}