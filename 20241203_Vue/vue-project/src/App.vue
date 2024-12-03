<template>
  <TopImage></TopImage>
  <div id="left">
    <LeftMenu></LeftMenu>
    <LeftUpdate></LeftUpdate>
  </div>
  <div id="right">
    <RightMarquee></RightMarquee>
    <RightContent></RightContent>
  </div>
  <BottomFooter></BottomFooter>
</template>

<script setup>
import TopImage from '@/components/TopImage.vue'
import LeftMenu from '@/components/LeftMenu.vue'
import LeftUpdate from '@/components/LeftUpdate.vue'
import RightMarquee from '@/components/RightMarquee.vue'
import RightContent from '@/components/RightContent.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>

<!--
<script setup>
import TopImage from '@/components/TopImage.vue'
import { ref } from 'vue'
const aaa = ref('')
</script>
-->

<!--
<script>
import TopImage from '@/components/TopImage.vue'
import { ref } from 'vue'
export default {
  components: {
    TopImage,
  },
  setup() {
    const aaa = ref('')
    return { aaa }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
-->
