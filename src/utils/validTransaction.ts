import { InterfaceTransactions } from 'interfaces/InterfaceTransactions'

class ValidTransaction {
  async execute(transacao: InterfaceTransactions) {
    await this.validDateAndTime(transacao)
    await this.validValueOfTransaction(transacao)
  }

  async validDateAndTime(transacao: InterfaceTransactions) {
    const actualyDate = new Date()

    if (!transacao.dataHora) {
      throw new Error('data não pode ser vazia')
    }

    if (transacao.dataHora! < actualyDate) {
      throw new Error('data menor que atual')
    }
  }

  async validValueOfTransaction(transacao: InterfaceTransactions) {
    if (transacao.valor <= 0) {
      throw new Error('valor não pode ser menor que zero')
    }
  }
}

export { ValidTransaction }
