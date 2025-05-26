import { InterfacePrismaDataBaseClient } from '../prisma'
import { InterfaceTransactions } from 'interfaces/InterfaceTransactions'

export interface InterfaceCreateTransactionService {
  execute(transacao: InterfaceTransactions): Promise<InterfaceTransactions>
}

class CreateTransactionService implements InterfaceCreateTransactionService {
  constructor(private prisma: InterfacePrismaDataBaseClient) {}

  async execute(transacao: InterfaceTransactions): Promise<InterfaceTransactions> {
    console.log(transacao)
    const client = await this.prisma.getClient()
    return client.transacao.create({
      data: transacao,
    })
  }
}

export { CreateTransactionService }
