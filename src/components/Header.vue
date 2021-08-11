<template>
    <header class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-5 col-5"><router-link to="/"><span class="logo text-white">Logo</span></router-link></div>
          <div class="col-lg-2 col-sm-3 col-3 pt-3" v-if="step != 0" @click="step = 0"><router-link to="/"><span class="sobre text-white">Início</span></router-link></div>
          <div class="col-lg-2 col-sm-3 col-3 pt-3" v-if="step != 1" @click="step = 1"><router-link to="/Sobre"><span class="sobre text-white">Sobre</span></router-link></div>
          <div class="col-lg-2 col-sm-2 col-3 pt-3" v-if="step != 3" @click="step = 3"><router-link to="/Contato"><span class="contato text-white">Contato</span></router-link></div>
        </div>
      </div>
    </header>
</template>

<script>

  export default {
    data () {
      return {
        step: 0,
      }
    }
}

</script>

<style scoped>
  .logo{
    font-weight: bold;
    font-size: 70px;
    cursor: pointer;
  }

  .sobre, .contato{
    font-size: 50px;
    cursor: pointer;
  }
  
  a{
    text-decoration: none;
  }
</style>