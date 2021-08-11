<template>
    <header class="bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-9"><router-link to="/"><span class="logo text-white">Logo</span></router-link></div>
          <div class="col-lg-6 col-sm-6 col-3">
            <div @click="menuMobile" class="col-6 mt-3 pt-3" id="menu-mobile">
              <button><i class="fas fa-bars fa-3x"></i></button>
            </div>
            <div id="menu" class="row">
              <div class="col-sm-6 col-6 pt-3" v-if="step != 0" @click="step = 0"><router-link to="/"><span class="sobre text-white">Início</span></router-link></div>
              <div class="col-sm-6 col-6 pt-3" v-if="step != 1" @click="step = 1"><router-link to="/Sobre"><span class="sobre text-white">Sobre</span></router-link></div>
              <div class="col-sm-6 col-6 pt-3" v-if="step != 3" @click="step = 3"><router-link to="/Contato"><span class="contato text-white">Contato</span></router-link></div>
            </div>
          </div>
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
    },
    methods: {
      menuMobile() {
        if(document.querySelector("#menu").style.display == 'flex') {
          document.querySelector("#menu").style.display = 'none';
        } else {
            document.querySelector("#menu").style.display = 'flex';
          }
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

  #menu{
    display: flex;
  }

  #menu-mobile{
    display: none;
  }

  @media (max-width: 575px) {
    #menu-mobile{
      display: block;
    }

    #menu{
      display: none;
      position: absolute;
      left: 0;
      top: 100px;
      width: 100%;
      background-color: #212529;
      margin: 0;
      padding: 0
    }

    #menu.row{
      flex-direction: column;
    }

    button{
      border: none;
      background: transparent;
    }

    .fa-bars{
      color: white;
    }
  }
</style>