import prismaClient from "../prisma"

class ListTransactionService {
  async execute() {
    try {
      const listTransactions = await prismaClient.transacao.findMany()
      return listTransactions
    } catch (error) {
      return error
    }
  }
}

export { ListTransactionService }
