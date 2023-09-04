<template>
    <div class="container">
        <div class="row text-light">
            <div class="col-12 col-lg-7">
                <div class="leftMain bg-success">
                    <div class="row">
                        <div class="col-12">
                            <buttonsSocial class="buttonsSocial" />
                        </div>
                        <div class="col-12">
                            <h3 class="d-block">Olá, {{ message }}</h3>
                        </div>
                        <EfeitoDigitacao />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 bg-dark">
                <imgEfects ImgSrc="/Assets/image/index/programador1.0.png" />
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    $fontePrimary: 'Titillium Web', sans-serif;

    .container{
        z-index: 2;
        
        .col-12 h3{
            font-family: $fontePrimary;
            font-weight:300;
            font-size: 3rem;
            color: #dbdbdb;
            text-shadow: 0px 0px 13px #000000;
        }
        .buttonsSocial{
            margin-top:-4rem;
        }
        .leftMain{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
</style>
<script>
export default {
  data() {
    return {
      message: "Bom dia!",
    };
  },
  mounted() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      this.message = "Bom dia!";
    } else if (hour >= 12 && hour < 18) {
      this.message = "Boa tarde!";
    } else if (hour >= 18 && hour < 24) {
      this.message = "Boa noite!";
    }
  },
};
</script>

<!--

    <LeftItemMain />

    <imgEfects ImgSrc="/Assets/img/index/programador1.0.png" />
<BarraBottom /> 
-->
