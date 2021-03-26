
import express from 'express'
import path from 'path'


const app = express()


app.use(express.json())


const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  console.log(__dirname);
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is Running...')
  })
}


const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Sever Runnig in ${process.env.NODE_ENV} mode on port 5000 ${PORT}`
  )
)
