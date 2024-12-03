import { User } from "../../../models/User"

export interface CreateUserInputDTO {
  nickname: string
  password: string
  email: string
}

export interface CreateUserOutputDTO {
  user: User
}