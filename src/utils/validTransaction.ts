import { TransacaoInterface } from "services/CreateTransactionService"

class ValidTransaction {
  async execute(transacao: TransacaoInterface) {
    await this.validDateAndTime(transacao)
  }

  async validDateAndTime(transacao: TransacaoInterface) {
    const actualyDate = new Date()

    if (transacao.dataHora < actualyDate) {
      throw new Error("data menor que atual")
    }
  }
}

export { ValidTransaction }
