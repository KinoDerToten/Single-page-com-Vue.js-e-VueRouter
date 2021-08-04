<template>
    <main>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-6 mb-5 mt-5">
              <div class="quadrado bg-dark">
                  <div class="container-fluid container-height">
                      <form action="" class="mt-5 border">
                          <div class="row p-5">
                              <div class="col">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Nome">
                                    </div>
                              </div>
                              <div class="col">
                                  <div class="form-group">
                                      <input type="email" class="form-control" placeholder="E-mail">
                                  </div>
                              </div>
                              <div class="w-100"></div>
                              <div class="col mt-5">
                                  <textarea class="form-control" rows="3" placeholder="Mensagem"></textarea>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6 mb-5 mt-5">
              <div class="quadrado bg-dark"></div>
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

    .container-height{
        height: 100%;
    }

    .container-height form{
        height: 100%;
    }
</style>