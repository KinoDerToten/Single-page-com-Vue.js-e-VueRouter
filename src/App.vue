<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  body{
    background: #c6c0a8;
  }

  #app{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #footer{
    margin-top: auto;
  }
</style>
