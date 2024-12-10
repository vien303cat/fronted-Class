<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>目前事項 {{ currentText }}</h1>
      </v-col>
      <v-col cols="12">
        <digit v-for="(data, i) in currentTime" :key="i" :data="data" color="white"></digit>
      </v-col>
      <v-col cols="12">
        <v-btn
          icon="mdi-play"
          :disabled="status === STATUS.COUNTING || (current.length === 0 && items.length === 0)"
          @click="startTimer"
        ></v-btn>
        <v-btn icon="mdi-pause" :disabled="status !== STATUS.COUNTING"></v-btn>
        <v-btn icon="mdi-skip-next" :disabled="current.length === 0"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const STATUS = {
  STOP: 0,
  COUNTING: 1,
  PAUSE: 2,
}
const status = ref(STATUS.STOP)
const list = useListStore()
const { current, items, timeleft } = storeToRefs(list)
const { setCurrentItem, countdown, setFinishItem } = list

const settings = useSettingsStore()
const currentText = computed(() => {
  if (current.value.length > 0) {
    return current.value
  } else if (items.value.length > 0) {
    return '點擊開始'
  } else {
    return '沒有事項'
  }
})

let timer = 0
const startTimer = () => {
  if (status.value === STATUS.STOP && items.value.length > 0) {
    setCurrentItem()
  }

  status.value = STATUS.COUNTING

  timer = setInterval(() => {
    countdown()
    if (timeleft.value === 0) {
      finishTimer()
    }
  }, 1000)
}

const finishTimer = () => {
  clearInterval(timer)
  status.value = STATUS.STOP
  setFinishItem()
}

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})
</script>

<route lang="yaml">
meta:
  title: 倒數
</route>
