import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helloRouter from './routes/hello'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/hellos', helloRouter)

app.use('/', (_req, res) => {
  return res.send('express-typescript-boilerplate')
})

const PORT: number = Number(process.env.PORT) || 5000

app.listen(PORT, () => {
  console.log(`Server is starting up on port: ${PORT}`)
})
