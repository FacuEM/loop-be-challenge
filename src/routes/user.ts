import express from 'express'
import { addUser, getAllUsers } from '../services/user'

const router = express.Router()


router.post('/', (req, res) => {
 try {
   const { name, email, country } = req.body
 
   const newUser = addUser({ name, email, country })
 
   res.json(newUser);
 } catch (error) {
  res.status(404).send((error as Error).message)
 }
})

router.get('/', (_req, res) => {
  res.send(getAllUsers())
})

export default router
