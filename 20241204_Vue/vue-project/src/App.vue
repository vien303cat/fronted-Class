<template>
  <TopImage></TopImage>
  <div id="left">
    <LeftMenu></LeftMenu>
  </div>
  <div id="right">
    <RightMarquee></RightMarquee>
    <div id="view">
      <RouterView></RouterView>
    </div>
  </div>
  <FooterButtom></FooterButtom>
</template>

<style lang="sass">
#app
  width: 1024px
  height: 768px
  margin: auto
</style>

<script setup>
import TopImage from '@/components/TopImage.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import RightMarquee from '@/components/RightMarquee.vue'
import FooterButtom from '@/components/FooterButtom.vue'
</script>

<style lang="sass" scoped>
  #left
    width: 200px
    height: calc(768px - 65px - 20px)
    margin-left: 12px
    float: left
    background: lightgray

  #right
    width: 800px
    height: calc(768px  - 65px - 20px)
    float: right
    background: lightgray
    margin-right: 12px

  #view
    width: 800px
    height: calc(768px - 65px - 20px - 29px)
</style>
