import express from 'express'
import { addHello, getHellos } from '../controllers/hello'

const helloRouter = express.Router()

helloRouter.get('/', getHellos)
helloRouter.post('/', addHello)

export default helloRouter
