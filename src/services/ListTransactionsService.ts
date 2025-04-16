import prismaClient from "../prisma"

interface InterfaceTransactions {
  id?: string
  valor: number
  dataHora?: Date | null
}

export abstract class InterfaceListTransactionService{
  abstract execute():  Promise<InterfaceTransactions[]>;
}

class ListTransactionService implements InterfaceListTransactionService {
  async execute(): Promise<InterfaceTransactions[]> {
    const listTransactions = await prismaClient.transacao.findMany()
    return listTransactions

  }
}

export { ListTransactionService }
