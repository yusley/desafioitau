import { InterfaceTransactions } from 'interfaces/InterfaceTransactions'

class EstatisticasTransactions {
  constructor(private transactions: InterfaceTransactions[]) {
    this.transactions = transactions
  }

  execute() {
    return {
      count: this.countTransactions(),
      sum: Number(this.sumTransactions().toFixed(2)),
      avg: Number(this.avaregeTransactions().toFixed(2)),
      min: this.minTransaction(),
      max: this.maxTransaction(),
    }
  }

  countTransactions() {
    return this.transactions.length
  }

  sumTransactions() {
    const initialValue = 0
    return this.transactions.reduce((acc, current) => acc + current.valor, initialValue)
  }

  avaregeTransactions() {
    const initialValue = 0
    const sum = this.transactions.reduce((acc, current) => acc + current.valor, initialValue)
    return sum / this.transactions.length
  }

  minTransaction() {
    const initialValue = this.transactions[0].valor
    return this.transactions.reduce((prev, current) => {
      if (current.valor < prev) {
        return current.valor
      } else {
        return prev
      }
    }, initialValue)
  }

  maxTransaction() {
    const initialValue = this.transactions[0].valor
    return this.transactions.reduce((prev, current) => {
      if (current.valor > prev) {
        return current.valor
      } else {
        return prev
      }
    }, initialValue)
  }
}

export { EstatisticasTransactions }
