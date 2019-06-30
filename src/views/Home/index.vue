<!-- 根目录 -->
<template>
  <div>
    根目录
    {{ $route.params }}
    <router-link :to="{ name: 'parent' }">父级路由</router-link>
    <router-link :to="{ name: 'child' }">二级路由</router-link>
    <div>
      <button @click="back">返回上一页</button>
      <button @click="navtar">跳转到parent</button>
      <button @click="replace">替换到name</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  mounted() {
    console.log(this.$store)
    console.log(this.$store.getters.app)
    console.log(this.$route.params)
  },
  methods: {
    back() {
      console.log(this.$router)
      this.$router.back()
    },
    navtar() {
      this.$router.push({
        name: 'parent',
        params: {
          name: 'lison'
        }
      })
    },
    replace() {
      this.$router.replace({
        path: '/name',
        query: {
          name: 1234
        }
      })
    }
  }
}
</script>

<style lang="less">

</style>
