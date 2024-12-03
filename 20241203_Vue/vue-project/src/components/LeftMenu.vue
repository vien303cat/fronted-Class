<template>
  <div id="menu">
    <h1>社團介紹</h1>
    <LeftMenuButton v-for="club in clubs" :key="club" :text="club"></LeftMenuButton>
  </div>
</template>
<script setup>
import LeftMenuButton from '@/components/LeftMenuButton.vue'
const clubs = ['吉他社', '熱舞社', '棒球社', '羽球社', '足球社', '童軍社']
</script>

<style scoped lang="sass">
#menu
  width: 215px
  height: calc( 768px - 68px - 25px - 20px )
  text-align: center
  font-family: "標楷體"

  & > h1
    color:#f0f
    fontsize:  24px
    border-bottom: 1px solid black
    display: inline-block
</style>
