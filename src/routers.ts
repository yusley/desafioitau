import { Router, Request, Response, NextFunction } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200)
})

router.get("/trasaction", (req: Request, res: Response) => {
  res.status(200)
})

export default router
