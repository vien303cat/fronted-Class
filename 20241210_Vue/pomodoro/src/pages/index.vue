<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>目前事項 {{ currentText }}</h1>
      </v-col>
      <v-col cols="12">
        <digit v-for="(data, i) in currentTime" :key="i" :data="data" :color="randColor(i)"></digit>
      </v-col>
      <v-col cols="12">
        <v-btn
          icon="mdi-play"
          :disabled="status === STATUS.COUNTING || (current.length === 0 && items.length === 0)"
          @click="startTimer"
        ></v-btn>
        <v-btn icon="mdi-pause" :disabled="status !== STATUS.COUNTING" @click="pauseTimer"></v-btn>
        <v-btn icon="mdi-skip-next" :disabled="current.length === 0" @click="finishTimer"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

// 元件銷毀
onUnmounted(() => {
  console.log('onUnmounted')
})

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
const { selectedFile } = storeToRefs(settings)

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

  const audio = new Audio()
  audio.src = selectedFile.value
  audio.play()

  setFinishItem()
  if (items.value.length > 0) {
    startTimer()
  }
}

const randColor = (i) => {
  // const colorArr = [
  //   'red',
  //   'white',
  //   'blue',
  //   'green',
  //   'yellow',
  //   'pink',
  //   'lightgray',
  //   'orange',
  //   'aqua',
  //   'purple',
  //   'lime',
  //   'crimson',
  //   'fuchsia',
  //   'gold',
  // ]
  const colorArr = [
    [
      '#FF7E5F', // (橙粉)
      '#FEB47B', // (淺橙)
      '#FFD89B', // (暖橙)
      '#FFECDB', // (淡奶)
      '#FFFFFF', // (純白)
    ],
    [
      '#FF9A9E', // (暖粉)
      '#FECFEF', // (淺粉)
      '#FDEB71', // (淡黃)
      '#F7F9A7', // (檸檬黃)
      '#FFFFFF', // (純白)
    ],
    [
      '#F3904F', // (橙黃)
      '#FF6B6B', // (亮粉)
      '#BC4E9C', // (紫紅)
      '#6A0572', // (深紫)
      '#2C2C54', // (午夜藍)
    ],
    [
      '#1A2980', // (深藍)
      '#26D0CE', // (淺藍綠)
      '#6A0572', // (深紫)
      '#000C40', // (黑藍)
      '#0F2027', // (黑灰)
    ],
    [
      '#00C9FF', // (亮藍)
      '#92FE9D', // (淺綠)
      '#FDCB6E', // (橙黃)
      '#F79D00', // (金橙)
      '#FF0080', // (玫瑰紅)
    ],
    [
      '#D9D9D9', // (淺灰)
      '#B3B3B3', // (淡灰)
      '#8C8C8C', // (中灰)
      '#666666', // (深灰)
      '#333333', // (黑灰)
    ],
  ]
  const randNum = Math.round(Math.random() * (colorArr.length - 1))
  console.log(i, colorArr[randNum][i])
  return colorArr[randNum][i]
}

const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ':' + s
})

const pauseTimer = () => {
  clearInterval(timer)
  status.value = STATUS.PAUSE
}
</script>

<route lang="yaml">
meta:
  title: 倒數
</route>
