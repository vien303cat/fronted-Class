import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import User from './user.js'
import { StatusCodes } from 'http-status-codes'
import validator from 'validator'

// 建立 express 網頁伺服器
const app = express() 
// 將傳入的body解析為json格式 (重要)
app.use(express.json())

// 處理express.json() 的錯誤, 可能是json格式不對
// 處理middleware 的錯誤 function 必須要直接放在下面,且要有四個參數
// eslint no-unused-vars: "error"
app.use((error, req, res, next) => {
    res.status(StatusCodes.BAD_REQUEST).json({
        success:false,
        message:'資料格式錯誤',
    })
}) 
// app.請求方式(路徑,處理動作(req 進來的request , res 出去的response))
app.post('/user', async (req,res) => {
    try{
        const user = await User.create({
            account: req.body.account,
            email: req.body.email
        })

        // const user = new User({
        //     account: req.body.account,
        //     email: req.body.email
        // })
        // await user.save();
        // const user = new User


        res.status(StatusCodes.CREATED)
        res.json({
            success: true,
            message: '',
            result :user
        })
        // 等於 res.status(StatusCodes.CREATED).json.json({
            // success: true,
            // message: '',
            // result :user
        // })
    }catch(error){
        console.log(error.name , error)
        if(error.name === 'MongoServerError' && error.code === 11000){
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: '帳號或信箱重複'
            })
        }else if(error.name === 'ValidationError'){
            const key = Object.keys(error.errors)[0]
            res.status(StatusCodes.FORBIDDEN).json({
                success: false,
                message: error.errors[key].message
            })
        }else{
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: '未知錯誤',
            })

        }
    }
})

//查詢所有 (不帶id)
app.get('/user',async(req,res) =>{
    try{
        // 可以參考 106行 findOne裡面的條件 同樣方法用在find裡面 只是差別在於找全部跟找第一筆
        const users = await User.find()
        res.status(StatusCodes.OK).json({
            success: true,
            message: '',
            result: users,
        })
    }catch(error){
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: '未知錯誤',
        })
    }
})

//查詢特定ID (../查詢id)
app.get('/user/:id',async(req,res) =>{
    
    // http://localhost:4000/user/1234
    // { id:1234 }  
    console.log(req)
    // http://loaclhost:4000/user?aaa=111&bbb=222
    // {aaa: 11 , bbb:222}
    console.log(req.query)

    try{

        // 預先確認是否有這個ID 有了再開始查詢動作 (id為db內建會新增的id ex:6760ee9029037ec7864154ed 這種格式)
        if(!validator.isMongoId(req.params.id)) throw new Error('ID')

        // const user = await User.findOne({_id: req.params.id})
        const user = await User.findById(req.params.id)
        if(!user) throw new Error('NOT FOUND')

        res.status(StatusCodes.OK).json({
            success: true,
            message: '',
            result: user,
        })
        
    }catch(error){
        console.log(error)
        if(error.name === 'CastError' || error.message === 'ID'){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: '格式錯誤',
            })
        } else if(error.message === 'NOT FOUND'){
            
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: '找不到',
            })
        }
    }
})

// 更新
app.patch('/user/:id',async(req,res) => {
    try{
        if(!validator.isMongoId(req.params.id)) { 
            throw new Error('ID') 
        }

            
        // new: true 設定回傳更新後的資料
        // runValidators: true 執行 schema 定義的驗證
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true,
        }).orFail(new Error('NOT FOUND'))
        
        res.status(StatusCodes.OK).json({
            success: true,
            message: '',
            result: user,
        })
    }catch(error){
        console.log(error)
        if(error.name === 'CastError' || error.message === 'ID'){
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: '格式錯誤',
            })
        } else if(error.message === 'NOT FOUND'){
            
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: '找不到',
            })
        } else if(error.name === 'MongoServerError' && error.code === 11000){
            res.status(StatusCodes.CONFLICT).json({
                success: false,
                message: '帳號或信箱重複'
            })
        }else if(error.name === 'ValidationError'){
            const key = Object.keys(error.errors)[0]
            res.status(StatusCodes.FORBIDDEN).json({
                success: false,
                message: error.errors[key].message
            })
        }else{
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: '未知錯誤',
            })

        }
    }
})

// 刪除
app.delete('/user/:id' , async(req,res) => {
    try{
        if(!validator.isMongoId(req.params.id)){
            throw new Error('ID')
        }
        await User.findByIdAndDelete(req.params.id).orFail(new Error('NOT FOUND'))

        
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'del ok',
        })
    }catch(error){
        console.log(error)
        if(error.name === 'CastError' || error.message === 'ID'){
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: '格式錯誤',
            })
        } else if(error.message === 'NOT FOUND'){
            
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: '找不到',
            })
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: '未知錯誤',
            })
        }
    }
})

// listen 監聽某個port的請求
app.listen(process.env.PORT || 4000 , () => {

    // 聽到之後 連線到mongodb
    mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log('資料庫連線成功')
    })
    .catch((error) => {
        console.log(error)
    })
    console.log('伺服器啟動')
})