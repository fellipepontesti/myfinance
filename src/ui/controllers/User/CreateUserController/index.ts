import { Request, Response } from "express";
import { createUserFactory } from "../../../../domain/usecases/User/CreateUser";
import { setResponse } from "../../../helpers/setResponse";

export default class CreateUserController {
  async handle (req: Request, res: Response): Promise<Response> {
    try {
      // adicionar validacao
      const output = await createUserFactory().call({
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password
      })
      
      return setResponse(res, 201, output)
    } catch (error: any) {
      throw new Error(error)
    }
  }
}