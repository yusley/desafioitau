import prismaClient from "../prisma"

export interface TransacaoInterface {
  id?: string
  valor: number
  dataHora: Date
}

class CreateTransactionService {
  async execute(transacao: TransacaoInterface) {
    try {
      const createdTrasaction = await prismaClient.transacao.create({
        data: transacao,
      })
      return createdTrasaction
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

export { CreateTransactionService }
