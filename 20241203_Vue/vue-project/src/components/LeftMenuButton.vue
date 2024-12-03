<template>
  <div class="btn">{{ text }}</div>
</template>

<style scoped lang="sass">
.btn
  width: 200px
  height: 35px
  text-align: center
  background: url(@/assets/menu1.png) no-repeat center
  margin: 5px 0
  align-content: center
  &:hover
    background: url(@/assets/menu2.png) no-repeat center
</style>

<script setup>
defineProps(['text'])
</script>

<!--
<script>
export default {
  props: ['text'],
}
</script>
-->
