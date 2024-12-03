<template>
  <div id="update">最近更新日期 {{ date }}</div>
</template>

<script setup>
const date = new Date().toLocaleDateString()
</script>

<style scoped lang="sass">
#update
  font-family: "標楷體"
  color: #000000
  font-size: 16px
  width: 215px
  height: 25px
  text-align: center
</style>
