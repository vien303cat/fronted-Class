<template>
  <h1>陽明山</h1>
  <h1>name: {{ $route.name }}</h1>
  <h1>path: {{ $route.path }}</h1>
  <h1>title: {{ $route.meta.title }}</h1>
  <input type="button" value="顯示路由資訊" @click="showInfo()">
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const showInfo = () => {
  console.log(route.name)
  console.log(route.path)
  console.log(route.meta.title)
}
</script>


<!-- <script>
// script option
export default{
  methods: {
    showInfo(){
      console.log(this.$route.name)
      console.log(this.$route.path)
      console.log(this.$route.meta.title)
    }
  }
}
</script> -->
