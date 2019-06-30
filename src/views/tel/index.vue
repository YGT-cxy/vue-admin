<!-- 命名路由 -->
<template>
  <div>
    tel:15768862294
    {{ email }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  mounted() {
    console.log(this)
    this.$bus.$on('email', email => {
      console.log(email)
      this.email = email
    })
  }
}
</script>

<style lang="" scoped>

</style>
