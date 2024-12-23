<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- <router-view /> -->
        <swiper
          class="mySwiper"
          :navigation="true"
          :modules="modules"
          :pagination="{
            dynamicBullets: true,
          }"
        >
          <swiper-slide
            v-for="(item, index) of imgArray"
            :key="index"
          >
            <img
              :src="item"
            >
          </swiper-slide>
        </swiper>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive } from "vue";
// 引入 swiper
import { Swiper, SwiperSlide } from "swiper/vue";
// 引入功能模組
import { Navigation, Pagination } from "swiper/modules";
// swiper 樣式
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

// 要顯示的圖片資料
const imgArray = reactive([
  'https://picsum.photos/600/300/?random=1',
  'https://picsum.photos/600/300/?random=2',
  'https://picsum.photos/600/300/?random=3',
  'https://picsum.photos/600/300/?random=4',
  'https://picsum.photos/600/300/?random=5',
  'https://picsum.photos/600/300/?random=6',
  'https://picsum.photos/600/300/?random=7',
  'https://picsum.photos/600/300/?random=8',
])

// swiper 模組
const modules = [Navigation, Pagination];
</script>

<style>
.mySwiper {
  width: 600px;
  height: 300px;
}
</style>