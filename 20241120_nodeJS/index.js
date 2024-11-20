import 'dotenv/config'
import linebot from 'linebot'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', 3000 || process.env.PORT, () => {
  console.log('機器人啟動')
})
