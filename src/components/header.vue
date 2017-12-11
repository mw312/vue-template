<template>
  <div>
    <h1>Header</h1>
    <h1>当前模块：{{moduletext}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'header',
    // props 接受父组件的数据，number
    props: ['moduletext'],
    created () {
      console.log('------header init -----------')
    },
    data () {
      return {
        headerMsg: 'init'
      }
    }
  }
</script>

