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
    <div>
      <p>appName: {{ $store.state.app.appName }}</p>
      <button type="button" @click="setStore">设置store</button>
    </div>
    <div>
      <p v-for="(item, index) of todoList" :key="index">{{ item }}</p>
      <button type="button" @click="register">动态注册store模块</button>
    </div>
    <div>
      <p v-for="(item, index) of userTodoList" :key="index">{{ item }}</p>
      <button type="button" @click="register2">动态注册store二级子模块</button>
    </div>
    <div>
      <button type="button" @click="login">登录接口</button>
    </div>
    <count-to :startVal="2000"
      :endVal="4000"
      :useEasing="true"
      :prefix="'$'"
      :suffix="'元'" />
    <count-to :startVal="2000"
      :endVal="4000"
      :useEasing="false" />
    <count-to :startVal="10"
      :endVal="2000"
    />
    <count-to ref="countTest"
      :startVal="3000"
      :endVal="endVal"
    />
    <button type="button" @click="updateCount">更新值</button>
    <button type="button" @click="updateCount2">更新值2</button>
  </div>
</template>

<script>
import { login } from '@/api/user'
import CountTo from '@/components/count-to'

export default {
  name: 'Home',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 5000
    }
  },
  computed: {
    todoList() {
      return this.$store.state.todo ? this.$store.state.todo.todoList : []
    },
    userTodoList() {
      return this.$store.state.user.todo ? this.$store.state.user.todo.todoList : []
    }
  },
  mounted() {
    // console.log(this.$store)
    // console.log(this.$store.getters.app)
    // console.log(this.$route.params)
  },
  methods: {
    back() {
      // console.log(this.$router)
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
    },
    // 设置store
    setStore() {
      this.$store.dispatch('app/setAppName', '后台')
    },
    // 动态注册模块
    register() {
      // console.log(this.$store)
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    // 动态注册二级子模块
    register2() {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
      // console.log(this.$store.state)
    },
    // 登录
    login() {
      // console.log(login)
      login().then(res => {
        console.log(res)
      })
    },
    updateCount() {
      this.endVal += 1000
    },
    updateCount2() {
      this.$refs['countTest'].update(6000)
      // this.endVal += 1000
    }
  }
}
</script>

<style lang="less">

</style>
