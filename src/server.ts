import express from 'express'
import { ConnectionDB } from './infra/db/connection'
import { Routes } from './ui/routes/routes'

export const app = express()

app.use(express.json());

app.listen(8000, () => {
  console.log('Server on at port 8000')
})

new Routes().loadRoutes(app)

ConnectionDB.initialize()
    .then(() => {
        console.log('Banco conectado')
    })
    .catch((error) => console.log(error))