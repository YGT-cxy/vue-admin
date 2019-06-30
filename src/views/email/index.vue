<!-- 邮箱 -->
<template>
  <div>
    邮箱
    <button type="button" @click="sendEmail">发送邮箱信息到tel组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    sendEmail() {
      this.$bus.$emit('email', '1159514579@qq.com')
    }
  }
}
</script>

<style lang="" scoped>

</style>
