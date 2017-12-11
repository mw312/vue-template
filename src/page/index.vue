<template>
  <div class="hello5">
    <myHeader :moduletext="'index'"></myHeader>
    <h1>{{ msg }}</h1>
    <h2>Index Page</h2>
    <h3>
      <router-link :to="'/module1/index/' + obj.id">
        客栈名称：{{ obj.inn.name }}
      </router-link>
    </h3>
    <h3>客栈账号：{{ obj.userCode }} -- {{ $DataUtil.goodTime(obj.createdAt, '创建') }}</h3>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from '../components/header.vue'
  import myFooter from '../components/footer.vue'
  export default {
    name: 'index',
    components: {myHeader, myFooter},
    created () {
      console.log('------' + process.env.NODE_ENV)
      console.log('------' + this.$CONST.DOMAIN.PMS)
      this.$api.get(this.$CONST.DOMAIN.PMS + '/api/client/getBaseInfo/141/false', null, r => {
        // console.log(r)
        this.obj = r.innAdmin
      })
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        obj: {
          inn: {}
        }
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
