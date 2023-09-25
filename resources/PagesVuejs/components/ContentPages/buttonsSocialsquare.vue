<template>
    <div class="card">
        <a :href="AbrirLink('telegram')" target="_blank" class="socialContainer containerOne">
            <!-- <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> -->
              <svg class="socialSvg telegramSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50"><path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path></svg>
              
        </a>

        <a :href="AbrirLink('facebook')" target="_blank" class="socialContainer containerTwo">
            <!-- <svg  viewBox="0 0 16 16"> -->
              <svg class="socialSvg facebookSvg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path></svg>
             </a>

        <a :href="AbrirLink('linkedin')" target="_blank" class="socialContainer containerThree">
            <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
        </svg>
    </a>

    <a :href="AbrirLink('whatsapp')" target="_blank" class="socialContainer containerFour">
        <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
            <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
            </path>
        </svg>
    </a>
</div>
</template>


<script setup>
function AbrirLink(link){
    if(link === 'linkedin') return 'https://www.linkedin.com/in/marcellohenrique-pro/';
    else if(link === 'facebook') return 'https://www.facebook.com/marcelo.sousahenrique.92';
    else if(link === 'whatsapp') return 'https://wa.me/5594981319065';
    else if(link === 'telegram') return 'https://t.me/MarceloHenriquePro';
}
</script>

<style lang="css" scoped>
    .card {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:row-reverse;
  padding: 25px 25px;
  gap: 20px;
  border: 0px;
  background: transparent;
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  overflow: hidden;
  transition-duration: .3s;
}
/* instagram*/
.containerOne:hover {
  background-color: #2294cf;
  transition-duration: .3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #415e9a;
  transition-duration: .3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: .3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128C7E;
  transition-duration: .3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}

.socialSvg {
  width: 17px;
}
.facebookSvg, .telegramSvg{
  width: 25px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


</style>