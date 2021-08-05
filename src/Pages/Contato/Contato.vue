<template>
    <main>
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-8">
            <div class="quadrado bg-dark">
              <div class="row p-5">
                <div class="col-6">
                  <input type="text" placeholder="Nome">
                </div>
                <div class="col-6">
                  <input type="email" placeholder="E-mail">
                </div>
                <div class="col mt-5">
                  <textarea rows="20" placeholder="Mensagem"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="contato">
              <h1>Contato</h1>
                <div class="container flex mt-5">
                  <div class="icon">
                    <i class="fas fa-envelope fa-3x"></i>
                  </div>
                  <div class="email">
                    E-mail: <br>
                    <a href="">email@email.com</a>
                  </div>
                </div>
                <div class="container flex mt-5">
                  <div class="icon">
                    <i class="fas fa-phone-alt fa-3x"></i>
                  </div>
                  <div class="email">
                    Telefone: <br>
                    (00)00000-0000
                  </div>
                </div>
                <div class="container flex mt-5">
                  <div class="icon">
                    <i class="fas fa-map-pin fa-3x"></i>
                  </div>
                  <div class="email">
                    Endereço: <br>
                    Rua Sabeselá, N° 46
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
    
</script>

<style scoped>
    .quadrado{
        height: 700px;
        opacity: 0.5;
    }

    textarea, input{
      width: 100%;
    }

    textarea:focus, input:focus {
      box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 

    textarea::placeholder, input::placeholder {
      color: #000;
      text-align: center;
    }

    .contato{
      height: 700px;
      border: 7px solid #000;
    }

    h1 {
      font-weight: bold;
      text-align: center;
    }

    .flex{
      display: flex;
    }

    .email{
      font-size: 20px;
      margin-left: 10px;
    }

    a{
      text-decoration: none;
      color: #000
    }
    
</style>