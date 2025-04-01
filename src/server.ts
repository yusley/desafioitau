import express from "express"
import router from "./routers"
import { json } from "express"

const app = express()

const port = "3000"

app.use(json())

app.use(router)

app.listen(port, () => {
  console.log("Server runing in port ", port)
})
