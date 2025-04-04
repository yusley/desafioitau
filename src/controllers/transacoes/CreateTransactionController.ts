import { Request, Response } from "express"
import { CreateTransactionService } from "../../services/CreateTransactionService"
import { ValidTransaction } from "../../utils/validTransaction"

class CreateTransactionController {
  private createTransactionService: CreateTransactionService
  private validTransaction: ValidTransaction

  constructor(createTransactionService: CreateTransactionService) {
    this.createTransactionService = createTransactionService
    this.validTransaction = new ValidTransaction()
  }

  async handle(req: Request, res: Response) {
    try {
      const transacao = req.body
      await this.validTransaction.execute(transacao)
      await this.createTransactionService.execute(transacao)
      res.status(201).send()
    } catch {
      res.status(400).send()
    }
  }
}

export { CreateTransactionController }
