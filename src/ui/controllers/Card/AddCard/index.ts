import { Request, Response } from "express";
import { createUserFactory } from "../../../../domain/usecases/User/CreateUser";
import errorResponse, { setResponse } from "../../../helpers/setResponse";
import { addCardFactory } from "../../../../domain/usecases/Card/AddCard/AddCard";
import { addCardValidator } from "./validator";

export default class AddCardController {
  async handle (req: Request, res: Response): Promise<Response> {
    try {
      console.log(req.body, '-->')
      await addCardValidator(req)

      const output = await addCardFactory().call({
        ...req.body 
      })
      
      return setResponse(res, 201, output)
    } catch (error: any) {
      return errorResponse(res, error)
    }
  }
}