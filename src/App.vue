<template>
    <div id="app">
        <router-view></router-view>
        <footer-tab></footer-tab>
    </div>
</template>

<style lang='less'>
  #app{
    width:100%;
    height:100%;
  }
</style>

<script>
import FooterTab from './components/footer.vue'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    FooterTab
  }
}
</script>
