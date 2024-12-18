import { Schema, model } from 'mongoose'
const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, '商品名稱必填'],
    },
    price: {
      type: Number,
      required: [true, '商品價格必填'],
      min: [0, '商品價格格式不正確'],
    },
    category: {
      type: String,
      enum: {
        // 限制欄位只能有陣列內的值
        values: ['遊戲', '音樂', '手機', '衣服'],
        // 錯誤信息的{VALUE} 會自動替換成傳入的值
        message: '商品分類錯誤,查無{VALUE}分類',
      },
    },
  },
  {
    // 移除內建會新增的__v 資料 __v 會記錄此筆資料修改了幾次
    versionKey: false,
    // timestamps:true 會自動新增兩筆keyvalue 分別為 更新時間(修改時會動態更新) 以及新增時間
    timestamps: true,
  },
)
// 對上資料表名稱
export default model('produts', schema)
