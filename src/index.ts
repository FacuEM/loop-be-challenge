import express from 'express'
import usersRoutes from './routes/user'
import countryRoutes from './routes/country'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/users', usersRoutes)
app.use('/api/country', countryRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
