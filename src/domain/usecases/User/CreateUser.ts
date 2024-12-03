import UserRepository from "../../../infra/repositories/User/UserRepository";
import WalletRepository from "../../../infra/repositories/Wallet/WalletRepository";
import { CreateUserInputDTO, CreateUserOutputDTO } from "../../dto/User/CreateUser/CreateUserDTO";
import { User } from "../../models/User";
import { Wallet } from "../../models/Wallet";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import { IWalletRepository } from "../../repositories/Wallet/IWalletRepository";

export default class CreateUser {
  private input: CreateUserInputDTO

  constructor (
    private userRepository: IUserRepository,
    private walletRepository: IWalletRepository
  ) {}

  async call (input: CreateUserInputDTO): Promise<CreateUserOutputDTO> {
    this.input = input
    
    const user = await this.saveUser()
    await this.saveWallet(user.id)

    return { user }
  }

  private async saveUser (): Promise<User> {
    const user = new User()

    user.nickname = this.input.nickname
    user.email = this.input.email
    user.passwordEncrypted = this.input.password

    return await this.userRepository.save(user)
  }

  private async saveWallet (userId: number) {
    const wallet = new Wallet()

    wallet.savedValue = 0
    wallet.valueCents = 0
    wallet.user_id = userId

    await this.walletRepository.save(wallet)
  }
}

export function createUserFactory (): CreateUser {
  return new CreateUser(new UserRepository, new WalletRepository)
}
