import { CreateTransactionController } from '../src/controllers/transacoes/CreateTransactionController'
import { ListTransactionsController } from '../src/controllers/transacoes/ListTransactionsController'
import { createTransactionFactory } from '../src/factories/CreateTransactionFactory'
import { Router, Request, Response } from 'express'
import { listTransactionsFactory } from '../src/factories/ListTransactionsFactory'
import { DeleteTransactionController } from '../src/controllers/transacoes/DeleteTransactionController'
import { deleteTransactionFactory } from '../src/factories/DeleteTransactionFactory'

class Routers {
  public router: Router
  private listTransactionService: ListTransactionsController
  private createTransactionController: CreateTransactionController
  private deleteTransactionController: DeleteTransactionController

  constructor() {
    this.router = Router()
    this.listTransactionService = listTransactionsFactory()
    this.createTransactionController = createTransactionFactory()
    this.deleteTransactionController = deleteTransactionFactory()

    this.initializedRouters()
  }

  private initializedRouters() {
    this.router.get('/', (req: Request, res: Response) => {
      res.status(200).send()
    })

    this.router.get('/transacao', (req: Request, res: Response) => {
      return this.listTransactionService.handle(req, res)
    })

    this.router.post('/transacao', (req: Request, res: Response) => {
      return this.createTransactionController.handle(req, res)
    })

    this.router.delete('/transacao', (req: Request, res: Response) => {
      return this.deleteTransactionController.handle(req, res)
    })
  }
}

export default Routers
