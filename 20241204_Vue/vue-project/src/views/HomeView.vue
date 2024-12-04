<template>
  <h1>Home</h1>
  <!-- $route : 取值用 , $router : 操作用(例如跳頁) -->
  <h1>name: {{ $route.name }}</h1>
  <h1>path: {{ $route.path }}</h1>
  <h1>title: {{ $route.meta.title }}</h1>
</template>
