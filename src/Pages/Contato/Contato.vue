<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
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
              <textarea cols="60" rows=""></textarea>
              <label>Mensagem:</label>
            </div>
          </form>
        </div>
        <div class="col">

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
    border-bottom: 4px solid #8798b5;
    background-color: transparent;
    outline: none;
    color: #8798b5;
    font-size: 1em;
    text-align: center;
  }

  input ~ label {
    position: absolute;
    top: 16px;
    left: 0;
    color: #8798b5;
  }

  .textarea-style textarea{
    border: none;
    border-bottom: 4px solid #8798b5;
    outline: none;
    background-color: transparent;
    -moz-appearence: none;
    -webkit-appearance: none;
    appearance: none;
    color: #8798b5;
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
    color: #8798b5;
  }
</style>