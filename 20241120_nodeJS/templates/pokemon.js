export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://s1.52poke.wiki/wiki/thumb/2/21/001Bulbasaur.png/300px-001Bulbasaur.png',
      size: 'full',
      aspectRatio: '13:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://line.me/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '妙蛙種子',
          weight: 'bold',
          size: 'xl',
          align: 'center'
        },
        {
          type: 'box',
          layout: 'baseline',
          margin: 'md',
          contents: [
            {
              type: 'text',
              text: '屬性',
              size: 'sm',
              color: '#000000',
              margin: 'none',
              flex: 0
            }
            // {
            //   type: 'icon',
            //   size: 'xl',
            //   url: 'https://developers-resource.landpress.line.me/fx/img/review_gold_star_28.png',
            //   margin: 'lg'
            // },
            // {
            //   type: 'text',
            //   text: '屬性',
            //   size: 'sm',
            //   color: '#000000',
            //   margin: 'sm',
            //   flex: 0
            // }
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '類型',
                  color: '#000000',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '種子寶可夢',
                  wrap: true,
                  color: '#000000',
                  size: 'lg',
                  flex: 5
                }
              ]
            }
          ]
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: '說明',
                  color: '#000000',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '背上的種子裡存著很多營養，所以就算好幾天不吃東西也能活得好好的！ 從出生的時候開始背上就有一顆植物種子。這顆種子會漸漸地長大。在出生後的一段時間內，牠會吸收背上種子裡儲存著的營養成長。',
                  wrap: true,
                  color: '#000000',
                  size: 'xs',
                  flex: 5
                }
              ]
            }
          ]
        }
      ],
      backgroundColor: '#CCCCCC50'
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '詳細',
            uri: 'https://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89/%E7%AE%80%E5%8D%95%E7%89%88'
          }
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          margin: 'sm'
        }
      ],
      flex: 0,
      backgroundColor: '#CCCCCC50'
    }
  }
}
