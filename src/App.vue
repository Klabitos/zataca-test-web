<template>
    <main-layout></main-layout>
</template>

<script>
import mainLayout from "./layout/MainLayout.vue"
export default {
  name: 'App',
  components: {
    mainLayout
  },
}
</script>

<style lang="scss">
@import "./style/colors.scss";

*{
    color: $primary-dark-color-font;
}

</style>
