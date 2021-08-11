<template>
  <main>
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-6">
          <form>
            <div class="input-style">
              <input type="text">
              <label>Nome:</label>
            </div>
            <div class="input-style">
              <input type="text">
              <label>E-mail:</label>
            </div>
            <div class="textarea-style">
              <textarea rows="10"></textarea>
              <label>Mensagem:</label>
            </div>
          </form>
        </div>
        <div class="col-lg-6 mt-5 mt-sm-5 mt-lg-0">
          <h1 class="text-center">Contato</h1>
          <div class="row p-sm-5">
            <div class="col-3 mb-5"><i class="fas fa-envelope fa-5x"></i></div>
            <div class="col-9">
              <h3>Email</h3>
              <p><a href="">email@email.com</a></p>
            </div>
            <div class="col-3 mb-5"><i class="fas fa-phone fa-5x"></i></div>
            <div class="col-9">
              <h3>Telefone</h3>
              <p>(00) 00000-0000</p>
            </div>
            <div class="col-3"><i class="fas fa-map-pin fa-5x"></i></div>
            <div class="col-9">
              <h3>Endereço</h3>
              <p>Rua Sabeselá, N°46</p>
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
    
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 64px;
    background-color: rgba(0,0,0,.7);
  }

  div.input-style{
    margin-bottom: 24px;
    position: relative;
  }

  input{
    -moz-appearence: none;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    padding: 16px;
    border: none;
    border-bottom: 4px solid #FFF;
    background-color: transparent;
    outline: none;
    color: #FFF;
    font-size: 1em;
    text-align: center;
  }

  input ~ label {
    position: absolute;
    top: 16px;
    left: 0;
    color: #FFF;
  }

  .textarea-style textarea{
    border: none;
    border-bottom: 4px solid #FFF;
    outline: none;
    background-color: transparent;
    -moz-appearence: none;
    -webkit-appearance: none;
    appearance: none;
    color: #FFF;
    width: 100%;
  }

  div.textarea-style{
    margin-bottom: 24px;
    position: relative;
    margin-top: 24px;
  }

  textarea ~ label {
    position: absolute;
    top: -20px;
    left: 0;
    color: #FFF;
  }

  h3{
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  p{
    font-size: 20px;
  }

  a{
    text-decoration: none;
    color: #333;
  }

  a:hover{
    color: blue;
  }
</style>