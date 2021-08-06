<template>
    <header class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-8"><router-link to="/"><span class="logo text-white">Logo</span></router-link></div>
          <div class="col-lg-2 pt-3"><router-link to="/Sobre"><span class="sobre text-white">Sobre</span></router-link></div>
          <div class="col-lg-2 pt-3"><router-link to="/Contato"><span class="contato text-white">Contato</span></router-link></div>
        </div>
      </div>
    </header>
</template>

<script>
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