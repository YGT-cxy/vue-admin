<!-- count-to 数字变化组件 -->
<template>
  <div ref="countTo">{{ endVal }}</div>
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'CountTo',
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      default: 0,
      type: Number,
      required: true
    },
    /**
     * @description 最终值
     */
    endVal: {
      default: 0,
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      default: 0,
      type: Number
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      default: 0,
      type: Number
    },
    /**
     * @description 渐变时长
     */
    duration: {
      default: 1,
      type: Number
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      default: false,
      type: Boolean
    },
    /**
     * @description 是否使用分组
     */
    useGrouping: {
      default: true,
      type: Boolean
    },
    /**
     * @description 用作分隔符的字符
     */
    separator: {
      default: ',',
      type: String
    },
    /**
     * @description 用作小数的字符
     */
    decimal: {
      default: '.',
      type: String
    },
    /**
     * @description 结果之前的文本
     */
    prefix: {
      default: '',
      type: String
    },
    /**
     * @description 结果之后的文本
     */
    suffix: {
      default: '',
      type: String
    },
    /**
     * @description 可选地为0-9传递一个自定义数字数组
     */
    numerals: {
      default: () => {
        return []
      },
      type: Array
    }
  },
  computed: {
    options() {
      return {
        useEasing: this.useEasing, // toggle easing
        useGrouping: this.useGrouping, // 1,000,000 vs 1000000
        separator: this.separator, // character to use as a separator 用作分隔符的字符
        decimal: this.decimal, // character to use as a decimal 用作小数的字符
        // easingFn: this.easingFn, // optional custom easing function, default is Robert Penner's easeOutExpo
        // formattingFn: this.formattingFn, // optional custom formatting function, default is formatNumber above 可选的自定义格式化函数，默认为上面的formatNumber
        prefix: this.prefix, // optional text before the result 结果之前的文本
        suffix: this.suffix, // optional text after the result 结果之后的文本
        numerals: this.numerals // optionally pass an array of custom numerals for 0-9 可选地为0-9传递一个自定义数字数组
      }
    }
  },
  data() {
    return {
      counter: null
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
    }
  },
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$refs['countTo'])
      // console.log(this.$el)
      this.counter = new CountUp(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  },
  methods: {
    /**
     * @function 重置动画
     */
    reset() {
      this.counter.reset()
    },
    /**
     * @function 暂停/恢复动画
     */
    pauseResume() {
      this.counter.pauseResume()
    },
    /**
     * @function 更新值
     */
    update(val) {
      this.counter.update(val)
    }
  }
}
</script>

<style lang="" scoped>

</style>
