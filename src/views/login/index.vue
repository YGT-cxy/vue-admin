<!-- 登录页 -->
<template>
  <div>
    登录页，需要登录才能进入到后台
    <button type="button" @click="handleClickLogin">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleClickLogin() {
      localStorage.setItem('HAS_LOGING', true)
    }
  }
}
</script>

<style lang="" scoped>

</style>
