// 讀取env擋內容
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'

// eslint會要求使用者統一格式 寫錯的話會有紅字  如果再settings.json裡面加上這幾行就會自動修正紅字了
// "editor.codeActionsOnSave": {
//     "source.fixAll.eslint": "explicit"
// },

const bot = linebot({
  channleId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  console.log(event)
  //   if (event.message.type !== 'text') return
  try {
    const result = await event.reply(event.message)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})

// HTTP轉送服務(可以直接用VSCODE實現 在TERMINAL右邊的PORTS , 因為賴跟本機端的通訊需要依靠轉送 直接請求是不行的)
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
