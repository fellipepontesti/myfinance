import { Moviment } from "../../../domain/models/Moviment";
import { IMovimentRepository } from "../../../domain/repositories/Moviment/IMovimentRepository";
import { ConnectionDB } from "../../db/connection";

export default class MovimentRepository implements IMovimentRepository {
  async save (moviment: Moviment): Promise<Moviment> {
    try {
      return ConnectionDB.manager.save(moviment)
    } catch (error: any) {
      throw new Error(error)
    }
  }
}