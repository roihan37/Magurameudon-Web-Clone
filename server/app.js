require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const router = require('./router')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})