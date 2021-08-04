<template>
    <header>
      <div class="container-fluid bg-dark">
        <div class="row">
          <div class="col-4">
            <router-link to="/" class="display-1 text-white font-bold">Logo</router-link>
          </div>
          <div class="col-3">
            <router-link to="/Sobre" class="display-3 text-white">Sobre</router-link>
          </div>
          <div class="col-3">
            <router-link to="/Contato" class="display-3 text-white">Contato</router-link>
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
</style>