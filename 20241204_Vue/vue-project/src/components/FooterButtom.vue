<template>
<div id="footer">網頁設計及維護：20陳昱瑄、最近更新日期：{{ date }}</div>
</template>


<script setup>
const date = new Date().toLocaleDateString()
</script>

<style lang="sass" scoped>

#footer
  width: 1000px
  height: 20px
  clear: both
  background: white
  margin: auto
  text-align: center
  font-family: "標楷體"
  color: #000000
  font-size: 16px



</style>
