<template>
  <div>
    <!-- 父组件传值给子组件 -->
    <myHeader :moduletext="currentModuleName"></myHeader>
    <ul>
      <li v-for="i in dat.result">
        客人来源：<span :style="{ color: i.colorValue }">{{i.name}}</span>
      </li>
    </ul>
    <!-- 父组件设置监听事件（module2callback），子组件回调父组件的方法（addCfByModule2） -->
    <module1Frame1 @module2callback="addCfByModule2"></module1Frame1>
    <myFooter></myFooter>
    <hr style="height:1px;border:none;border-top:1px solid #555555;"/>
    <!-- 组件之间通讯 -->
    <module2Index></module2Index>
  </div>
</template>
<script>
  import myHeader from '../../components/header.vue'
  import myFooter from '../../components/footer.vue'
  import module1Frame1 from '../../page/module1/module1_frame1.vue'
  import module2Index from '@/page/module2/module2_index'
  import bus from '../../event'
  export default {
    components: {myHeader, myFooter, module1Frame1, module2Index},
    data () {
      return {
        dat: {},
        currentModuleName: 'module1Index'
      }
    },
    created () {
      this.getData()
      // 在组件 module2 创建的钩子中监听事件
      bus.$on('which-module-created', function (moduleName) {
        this.currentModuleName = moduleName + '已创建！'
      }.bind(this))
    },
    methods: {
      getData () {
        console.log(this.$route)
        this.$api.get(this.$CONST.DOMAIN.PMS + '/api/client/getCustomerFrom/' + this.$route.params.id, null, r => {
          this.dat = r
        })
      },
      addCfByModule2 (obj) {
        console.log('----addCfByModule2-----')
        this.dat.result.push(obj)
      }
    }
  }
</script>
