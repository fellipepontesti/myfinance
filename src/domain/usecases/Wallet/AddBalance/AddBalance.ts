import MovimentRepository from "../../../../infra/repositories/Moviment/MovimentRepository";
import WalletRepository from "../../../../infra/repositories/Wallet/WalletRepository";
import { Moviment, EnumTransactionType } from "../../../models/Moviment";
import { Wallet } from "../../../models/Wallet";
import { IMovimentRepository } from "../../../repositories/Moviment/IMovimentRepository";
import { IWalletRepository } from "../../../repositories/Wallet/IWalletRepository";

export interface AddBalanceInputDTO {
  walletId: number
  balance_cents: number
  description: string
  savedValue?: boolean
}

export default class AddBalance {
  private input: AddBalanceInputDTO
  private wallet: Wallet

  constructor (
    private walletRepository: IWalletRepository,
    private movimentRepository: IMovimentRepository
  ) { }

  async call(input: AddBalanceInputDTO): Promise<void> {
    this.input = input

    await this.getWallet()
    await this.saveMoviment()
    await this.saveNewBalanceWallet()
  }

  private async getWallet () {
    const result = await this.walletRepository.getById(this.input.walletId)

    if (!result) {
      throw new Error('Wallet não encontrada')
    }

    this.wallet = result
  }

  private async saveMoviment() {
    const moviment = new Moviment()

    moviment.balanceCents = this.input.balance_cents
    moviment.walletId = this.input.walletId  
    moviment.description = this.input.description
    moviment.type = EnumTransactionType.INCOME

    if (this.input.savedValue) {
      moviment.description = `Guardando valor, ${this.input.description}`
    }

    await this.movimentRepository.save(moviment)
  }

  private async saveNewBalanceWallet () {
    if (this.input.savedValue) {
      this.wallet.savedValue += this.input.balance_cents
    } else {
      this.wallet.valueCents += this.input.balance_cents
    }

    await this.walletRepository.save(this.wallet)
  }
}

export function addBalanceFactory (): AddBalance {
  return new AddBalance(new WalletRepository(), new MovimentRepository())
}