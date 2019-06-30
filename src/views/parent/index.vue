<!-- 一级路由 -->
<template>
  <div>
    一级路由
    {{ $route.params }}
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Perant',
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="" scoped>

</style>
