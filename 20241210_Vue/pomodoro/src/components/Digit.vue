<template>
  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="841.89px"
    height="595.28px"
    viewBox="0 0 841.89 595.28"
    enable-background="new 0 0 841.89 595.28"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M508.4,75.617c0,2.965-2.404,5.369-5.369,5.369H363.021
	c-2.965,0-5.369-2.404-5.369-5.369l0,0c0-2.965,2.404-5.369,5.369-5.369h140.011C505.996,70.248,508.4,72.652,508.4,75.617
	L508.4,75.617z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M508.4,250.114c0,2.966-2.404,5.369-5.369,5.369H363.02
	c-2.965,0-5.369-2.403-5.369-5.369l0,0c0-2.966,2.404-5.369,5.369-5.369h140.011C505.996,244.745,508.4,247.148,508.4,250.114
	L508.4,250.114z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M508.398,87.491c2.967,0,5.369,2.404,5.369,5.369v140.01
	c0,2.965-2.402,5.369-5.369,5.369l0,0c-2.965,0-5.369-2.404-5.369-5.369V92.86C503.029,89.896,505.434,87.491,508.398,87.491
	L508.398,87.491z"
    />
    <path
      :class="{ active: '045689'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M357.651,87.491c2.966,0,5.369,2.404,5.369,5.369v140.01
	c0,2.965-2.403,5.369-5.369,5.369l0,0c-2.965,0-5.369-2.404-5.369-5.369V92.86C352.282,89.896,354.687,87.491,357.651,87.491
	L357.651,87.491z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M357.651,424.611c0,2.965,2.404,5.369,5.369,5.369h140.011
	c2.965,0,5.369-2.404,5.369-5.369l0,0c0-2.967-2.404-5.369-5.369-5.369H363.02C360.055,419.242,357.651,421.645,357.651,424.611
	L357.651,424.611z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M357.652,261.988c-2.966,0-5.369,2.404-5.369,5.369v140.01
	c0,2.965,2.403,5.369,5.369,5.369l0,0c2.965,0,5.369-2.404,5.369-5.369v-140.01C363.021,264.392,360.617,261.988,357.652,261.988
	L357.652,261.988z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M508.4,261.988c-2.967,0-5.369,2.404-5.369,5.369v140.01
	c0,2.965,2.402,5.369,5.369,5.369l0,0c2.965,0,5.369-2.404,5.369-5.369v-140.01C513.77,264.392,511.365,261.988,508.4,261.988
	L508.4,261.988z"
    />
    <circle
      :class="{ active: ':'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      cx="433.026"
      cy="162.865"
      r="20.135"
    />
    <circle
      :class="{ active: ':'.includes(data) }"
      fill="#E60012"
      stroke="#000000"
      stroke-miterlimit="10"
      cx="433.026"
      cy="337.361"
      r="20.135"
    />
  </svg>
</template>

<script setup>
defineProps({
  data: {
    type: String,
    default() {
      return '0'
    },
  },
  color: {
    type: String,
    default() {
      return 'white'
    },
  },
})
</script>

<style scoped lang="sass">
path, circle
  fill: transparent
  &.active
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    fill: v-bind(color)

.digit
  height: 600px
  width: 600px
  margin-right: -350px
  filter: drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.8))
</style>
