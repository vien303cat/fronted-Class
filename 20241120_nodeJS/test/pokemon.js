import axios from 'axios'

(async (index = 1, event) => {
  try {
    const { data } = await axios.get('https://raw.githubusercontent.com/rayc2045/pokedex/main/data/PokeApi.json')
    console.log(data[index])
    // console.log(event)

    // 職訓局會擋中國網站
    // const { img } = await axios.get('https://pokemon.fantasticmao.cn/pokemon/detail?index=1')
    // console.log(img[0].detail.imgUrl)
  } catch (error) {
    console.error(error)
  }
})(59)
