import { Schema, model, ObjectId } from 'mongoose'

// 製作一組物件給下面(可以先往下看) 的 schema 來引用
const cartSchema = new Schema(
  {
    product: {
      // mongodb的id 類型是 ObjectId(mongodb規定 id類型並不是string)
      type: ObjectId,
      // id 來源是 produts <對到資料表名稱 
      ref: 'produts',
      required: [true, '購物車商品ID必填'],
    },
    quantity: {
      type: Number,
      required: [true, '購物車商品數量必填'],
    },
  },
  {
    // 移除內建會新增的__v 資料 __v 會記錄此筆資料修改了幾次
    versionKey: false,
  },
)

const schema = new Schema({
  account: {
    type: String,
    required: [true, '帳號必填'],
    unique: true,
  },
  cart: {
    type: [cartSchema],
  },
})
export default model('users', schema)
