import { InterfacePrismaDataBaseClient } from '../prisma'

interface InterfaceTransactions {
  id?: string
  valor: number
  dataHora?: Date | null
}

export interface InterfaceListTransactionService {
  execute(): Promise<InterfaceTransactions[]>
}

class ListTransactionService implements InterfaceListTransactionService {
  constructor(private prisma: InterfacePrismaDataBaseClient) {}

  async execute(): Promise<InterfaceTransactions[]> {
    const client = await this.prisma.getClient()
    return client.transacao.findMany()
  }
}

export { ListTransactionService }
