import { Response, Request } from 'express'

const differentHellos: string[] = ['Hello', 'Bonjour', 'Hola', 'Hallo']

// GET
export const getHellos = (_req: Request, res: Response): Response => {
  return res.status(200).send(differentHellos)
}

// POST, body: { newHello }
export const addHello = (req: Request, res: Response): Response => {
  const { newHello } = req.body

  differentHellos.push(newHello)

  return res.status(201).send(differentHellos)
}
