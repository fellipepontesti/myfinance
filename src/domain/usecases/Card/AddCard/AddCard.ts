import CardRepository from "../../../../infra/repositories/Card/CardRepository";
import UserRepository from "../../../../infra/repositories/User/UserRepository";
import { Card } from "../../../models/Card";
import { ICardRepository } from "../../../repositories/Card/ICardRepository";
import { IUserRepository } from "../../../repositories/User/IUserRepository";

export interface AddCardInputDTO {
  nickname: string
  userId: number
  color: string
  limitCents: number
  dueDay: number
}

export default class AddCard {
  private input: AddCardInputDTO

  constructor (
    private cardRepository: ICardRepository,
    private userRepository: IUserRepository
  ) {}

  async call (input: AddCardInputDTO) {
    this.input = input
    await this.getUser()
    await this.setNewCard()
  }

  private async getUser () {
    const result = await this.userRepository.getById(this.input.userId)

    if (!result) {
      throw new Error('Usuário não encontrado')
    }
  }

  private async setNewCard () {
    const card = new Card()

    card.nickname = this.input.nickname
    card.color = this.input.color
    card.dueDay = this.input.dueDay
    card.limitCents = this.input.limitCents
    card.userId = this.input.userId

    await this.cardRepository.save(card)
  }
}

export function addCardFactory (): AddCard {
  return new AddCard(new CardRepository(), new UserRepository())
}