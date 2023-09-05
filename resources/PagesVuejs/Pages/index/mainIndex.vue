<template>
    <div class="container">
        <div class="row text-light">
            <div class="col-12 col-lg-7">
                <div class="leftMain">
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
            <div class="col-12 col-lg-5">
                <imgEfects ImgSrc="/Assets/image/index/programador1.0.png" />
            </div>
        </div>
        <BarraBottomUser />
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
            height: 100%;
        }
    }
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const message = ref('Bom dia');

const updateMessage = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 0 && hour < 12) message.value = "Bom dia!"; else 
  if (hour >= 12 && hour < 18) message.value = "Boa tarde!"; else 
  if (hour >= 18 && hour < 24) message.value = "Boa noite!";
};

onMounted(() => {
  window.addEventListener('mousemove', updateMessage);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMessage);
});
</script>