<template>
    <header class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <router-link to="/"><h1>Logo</h1></router-link>
          </div>
          <div class="col">
            <router-link to="/sobre"><span class="menu">Sobre</span></router-link>
          </div>
          <div class="col">
            <router-link to="/contato"><span class="menu">Contato</span></router-link>
          </div>
        </div>
      </div>
    </header>
</template>

<script>

</script>

<style scoped>
  header a{
        text-decoration: none;
    }

  header .font-bold{
        font-weight: bold;
    }

  header h1 {
    color: #FFF;
    font-size: 90px;
  }

  .menu{
    color: #FFF;
    font-size: 50px;
  }

  header .container{
    height: 120px;
  }
</style>