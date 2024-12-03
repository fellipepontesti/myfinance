import { User } from "../../../domain/models/User";
import { IUserRepository } from "../../../domain/repositories/User/IUserRepository";
import { ConnectionDB } from "../../db/connection";

export default class UserRepository implements IUserRepository {
  async save (user: User): Promise<User> {
    try {
      return ConnectionDB.manager.save(user)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async getById (id: number): Promise<User | null> {
    try {
      return ConnectionDB.manager.findOne(User, { where: { id }})
    } catch (error: any) {
      throw new Error(error)
    }
  }
}