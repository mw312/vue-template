<template>
  <div>
    <h1>{{ msg }}</h1>
    渠道名称：<input v-model="name">
    渠道颜色：<input v-model="color">
    <button @click="addCf">增加一个来源渠道</button>
  </div>
</template>

<script>
  export default {
    name: 'module1Frame1',
    data () {
      return {
        msg: 'insert module1Frame1',
        name: '',
        color: ''
      }
    },
    methods: {
      addCf () {
        var obj = {}
        obj.name = this.name
        obj.colorValue = this.color
        // 子组件回调父组件设置的监听事件（module2callback）
        this.$emit('module2callback', obj)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
