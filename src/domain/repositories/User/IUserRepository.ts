import { User } from "../../models/User";

export interface IUserRepository {
  save: (user: User) => Promise<User>
  getById: (id: number) => Promise<User | null>
}