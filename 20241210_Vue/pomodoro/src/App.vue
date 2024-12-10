<template>
  <!-- 網頁最外層 -->
  <v-app>
    <!-- 導覽列 -->
    <v-app-bar>
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鍾</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/"> 首頁 </v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list"> 事項 </v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings"> 設定 </v-btn>
      </v-container>
    </v-app-bar>
    <!-- 路由 -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
