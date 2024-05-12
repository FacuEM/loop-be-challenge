import express from 'express'
import { getFavCountries } from '../services/country'

const router = express.Router()

router.get('/', async (_req, res) => {
  const favCountries = await getFavCountries()
   res.send(favCountries)
})

export default router
