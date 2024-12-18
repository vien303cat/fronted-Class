import { Schema, model } from 'mongoose'
import vali from 'validator'

const schema = new Schema({
    // 資料欄位名稱
    account:{
        // 資料型態 : type
        type:String,
        // 帳號必填:[boolean ,string 錯誤返回信息]
        require: [true, '帳號必填'],
        // 限制長度:[int 字數,string 錯誤返回信息]
        minLength : [4,  '帳號最少4個字'],
        maxLength : [20, '帳號最長20個字'],
        // 欄位資料不能重複: boolean
        unique: true,
        // Regex 開頭^到結尾$只能有 A-Za-z0-9 +為判斷一次以上 : [logic 邏輯 , string 錯誤返回信息]
        match:[/^[A-Za-z0-9]+$/ , '帳號只能是英數字'],
        // 自動使用.trim()去除前後空白 : [boolean] 
        trim:true,
    },
    email:{
        type:String,
        required:[true,'信箱必填'],
        unique: true,
        // 自訂驗證 npm i validator
        validate: {
            validator(value){
                return vali.isEmail(value)
            },
            message:'信箱格式錯誤'
        }
    },
})

// 把結構轉成可以操作的 model 匯出
//  model(collection名稱, schema)
//  collection 名稱使用英文複數
export default model('users',schema)