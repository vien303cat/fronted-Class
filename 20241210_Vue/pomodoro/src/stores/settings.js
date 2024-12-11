import { defineStore } from 'pinia'
export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      { id: 1, name: 'colck', file: new URL('@/assets/鈴聲/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/鈴聲/yay.mp3', import.meta.url).href },
    ],
    selected: 1,
  }),
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  // 保存state裡的變數進localstorage
  persist: {
    key: 'pomodoro-settings',
    // pick : 保存指定的變數 以前叫做paths
    pick: ['selected'],
  },
})
