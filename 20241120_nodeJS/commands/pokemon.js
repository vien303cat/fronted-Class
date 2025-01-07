import axios from 'axios'
import template from '../templates/pokemon.js'
import fs from 'fs'

export default async (index = 2, event) => {
  try {
    const { data } = await axios.get('https://raw.githubusercontent.com/rayc2045/pokedex/main/data/PokeApi.json')
    const pokemon = data[index - 1]
    console.log(pokemon)
    const typeImgLibrary = {
      一般: 'https://static.wikia.nocookie.net/pokemongo/images/4/43/Icon_Normal.png',
      火: 'https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Fire.png',
      水: 'https://static.wikia.nocookie.net/pokemongo/images/6/65/Icon_Water.png',
      草: 'https://static.wikia.nocookie.net/pokemongo/images/0/0a/Icon_Grass.png',
      電: 'https://static.wikia.nocookie.net/pokemongo/images/1/1c/Icon_Electric.png',
      冰: 'https://static.wikia.nocookie.net/pokemongo/images/5/52/Icon_Ice.png',
      格鬥: 'https://static.wikia.nocookie.net/pokemongo/images/f/f0/Icon_Fighting.png',
      毒: 'https://static.wikia.nocookie.net/pokemongo/images/2/26/Icon_Poison.png',
      地面: 'https://static.wikia.nocookie.net/pokemongo/images/7/71/Icon_Ground.png',
      飛行: 'https://static.wikia.nocookie.net/pokemongo/images/b/b0/Icon_Flying.png',
      超能力: 'https://static.wikia.nocookie.net/pokemongo/images/c/ce/Icon_Psychic.png',
      蟲: 'https://static.wikia.nocookie.net/pokemongo/images/8/88/Icon_Bug.png',
      岩石: 'https://static.wikia.nocookie.net/pokemongo/images/5/57/Icon_Rock.png',
      幽靈: 'https://static.wikia.nocookie.net/pokemongo/images/7/7d/Icon_Ghost.png',
      龍: 'https://static.wikia.nocookie.net/pokemongo/images/d/d4/Icon_Dragon.png',
      惡: 'https://static.wikia.nocookie.net/pokemongo/images/e/e9/Icon_Dark.png',
      鋼: 'https://static.wikia.nocookie.net/pokemongo/images/3/38/Icon_Steel.png',
      妖精: 'https://static.wikia.nocookie.net/pokemongo/images/7/7f/Icon_Fairy.png'
    }

    if (pokemon !== undefined) {
      // 職訓局會擋中國網站 取圖片
      const img = await axios.get(`https://pokemon.fantasticmao.cn/pokemon/detail?index=${index}`)
      if (img.data.code !== 200) {
        event.reply('查詢失敗,伺服器請求受阻:' + img)
      }

      const t = template()
      const imgUrl = (img.data.data.length !== 0) ? img.data.data[0].detail.imgUrl : 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1664884575170.jpg'
      const name = pokemon.name.zh
      const kind = pokemon.genera.zh

      const detail = pokemon.entries.zh.join('')

      if (!imgUrl || !name || !kind) {
        event.reply('查詢失敗,資料有誤 編號:' + index)
      }

      let typeIcon = ''
      let typeTxt = ''
      for (const val of pokemon.types.zh) {
        typeIcon = {
          type: 'icon',
          size: 'xl',
          url: typeImgLibrary[val],
          margin: 'lg'
        }
        typeTxt = {
          type: 'text',
          text: val,
          size: 'sm',
          color: '#000000',
          margin: 'sm',
          flex: 0
        }
        t.body.contents[1].contents.push(typeIcon)
        t.body.contents[1].contents.push(typeTxt)
      }

      const wikiUrl = 'https://wiki.52poke.com/wiki/' + pokemon.name.en
      t.hero.url = imgUrl
      console.log(t.hero.url)
      t.hero.action.uri = wikiUrl
      t.body.contents[0].text = name
      t.footer.contents[0].action.uri = wikiUrl
      t.body.contents[2].contents[0].contents[1].text = kind
      t.body.contents[3].contents[0].contents[1].text = detail

      const output = t
      const result = await event.reply({
        type: 'flex',
        altText: '編號:' + index + ' |' + name,
        contents: {
          type: 'carousel',
          contents: [output]
        }
      })
      console.log(result)
    } else {
      event.reply('查詢失敗,沒有該筆編號的寶可夢資料:' + event.message.text)
    }
  } catch (error) {
    console.error(error)
  }
}
