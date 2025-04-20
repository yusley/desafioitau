import { InterfacePrismaDataBaseClient } from '../prisma'

export interface InterfaceDeleteTransactionService {
  execute(): Promise<void>
}

class DeleteTransactionService implements InterfaceDeleteTransactionService {
  constructor(private prisma: InterfacePrismaDataBaseClient) {}
  async execute(): Promise<void> {
    const client = await this.prisma.getClient()

    await client.transacao.deleteMany({})
  }
}

export { DeleteTransactionService }
