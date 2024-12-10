import { defineStore } from 'pinia'
export const useSettingsStore = defineStore('settings',{
  state: () => ({
    alarms:[
      {id:1,name:'colck',file: new URL('@/assets/鈴聲/alarm.mp3',import.meta.url).href  },
      {id:2,name:'yay',file: new URL('@/assets/鈴聲/yay.mp3',import.meta.url).href  },
    ],
    selected:1,
  })
})
