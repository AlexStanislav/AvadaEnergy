<template>
  <svg :viewBox="viewBox">
    <path :d="iconPath" />
  </svg>
</template>
<script setup>
const props = defineProps({
  iconPath: {
    type: String,
    default: "empty"
  },
  viewBox: {
    type: String,
    default: '0 0 25 25'
  }
});
</script>