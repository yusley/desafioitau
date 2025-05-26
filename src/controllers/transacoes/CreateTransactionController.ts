import { Request, Response } from 'express'
import { InterfaceCreateTransactionService } from '../../services/CreateTransactionService'
import { ValidTransaction } from '../../utils/validTransaction'

class CreateTransactionController {
  private createTransactionService: InterfaceCreateTransactionService
  private validTransaction: ValidTransaction

  constructor(
    createTransactionService: InterfaceCreateTransactionService,
    validTransaction: ValidTransaction
  ) {
    this.createTransactionService = createTransactionService
    this.validTransaction = validTransaction
  }

  async handle(req: Request, res: Response) {
    try {
      const transacao = req.body
      console.log(transacao)
      await this.validTransaction.execute(transacao)
      await this.createTransactionService.execute(transacao)
      res.status(201).send()
    } catch {
      res.status(422).send()
    }
  }
}

export { CreateTransactionController }
