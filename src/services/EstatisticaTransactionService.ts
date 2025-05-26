import { InterfacePrismaDataBaseClient } from 'prisma'
import { EstatisticasTransactions } from '../utils/estatisticas'

interface Estatisticas {
  count: number
  sum: number
  avg: number
  min: number
  max: number
}

export interface InterfaceEstatisticaTransactionService {
  execute(): Promise<Estatisticas>
}

class EstatisticaTransactionService implements InterfaceEstatisticaTransactionService {
  constructor(private prisma: InterfacePrismaDataBaseClient) {}

  async execute() {
    const client = await this.prisma.getClient()
    const transactions = await client.transacao.findMany()
    return new EstatisticasTransactions(transactions).execute()
  }
}

export { EstatisticaTransactionService }
