import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  // 保存的資料 = data
  state: () => {
    return {
      number: 0,
    }
  },
  // 修改資料的 function = methods
  actions: {
    plus() {
      this.number++
    },
    minus() {
      this.number--
    },
  },
  // 取資料的 function = computed
  getters: {
    square() {
      return Math.pow(this.number, 2)
    },
  },
})
