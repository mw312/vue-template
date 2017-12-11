<template>
  <div>
    <myHeader :moduletext="currentModuleName"></myHeader>
    <h1>MODULE2</h1>
    <button @click="doEventInModule1Index">触发module1组件中的事件</button>
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '../../components/header.vue'
  import myFooter from '../../components/footer.vue'
  import bus from '../../event'
  export default {
    components: {myHeader, myFooter},
    data () {
      return {
        dat: {},
        currentModuleName: 'module2'
      }
    },
    created () {

    },
    methods: {
      doEventInModule1Index () {
        // 触发组件 module1Index 中的事件
        bus.$emit('which-module-created', this.currentModuleName)
      }
    }
  }
</script>
