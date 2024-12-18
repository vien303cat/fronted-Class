import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import routerProduct from './routes/product.js'
import routerUser from './routes/user.js'

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('資料庫連線成功')
  })
  .catch((error) => {
    console.log('資料庫連線失敗')
    console.log(error)
  })

const app = express()
app.use(express.json())

app.use((error, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: '資料格式錯誤',
  })
})

app.use('/product', routerProduct)
app.use('/user', routerUser)

app.listen(4000, () => {
  console.log('伺服器啟動')
})
