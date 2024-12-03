import { Request } from "express";
import { number, object, string } from "yup";
import ValidationError from "../../../../shared/errors/ValidationError";

const schema = object().shape({
  userId: number()
    .typeError('User id deve ser numérico')
    .required('Id do usuário deve ser informado'),
  color: string()
    .required('Cor do cartão deve ser informado')
    .test('format', 'Cor deve ser hexadecimal', (color) => /^#[0-9A-F]{6}$/i.test(color)),
  nickname: string()
    .required('Nome do cartão deve ser informado')
    .typeError('Nome do cartão deve ser string'),
  dueDate: number()
    .required('Dia de vencimento deve ser informado')
    .typeError('Dia de vencimento deve ser numérico'),
  limitCents: number()
    .required('Limite do cartão deve ser informado')
    .typeError('Limite do cartão deve ser numérico')
    .test('is-valid-format', 'Valor do limite com formato inválido. Ex.: R$20,50 = 2050', (value) => {
      return /^([0-9]+)$/g.test(value?.toString() || '')
    })
})


export async function addCardValidator (req: Request) {
  try {
    await schema.validate(req.body)
  } catch (error: any) {
    throw new ValidationError(error.message)
  }
}