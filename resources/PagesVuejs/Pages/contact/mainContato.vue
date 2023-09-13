<template>
    <div class="container-fluid">
        <LayoutTopPages>
            <particlesCircles />
            <template #titlePage>
                Contatos
            </template>
        </LayoutTopPages>

        <div class="row">
            <div class="col-12 d-flex justify-content-center align-itens-center flex-wrap">

                <div class="contactsUser">

                    <div v-for="list in listContact" :key="list"
                    @click="AbrirLink(list.title)" :class="['IconsContacts', list.class]">
                        <span class="tooltip">{{ list.title }}</span>
                        <div v-html="list.icon"></div>
                    </div>
                    
                    <br>
                    <div class="description" v-if="RedSocial === null">Clique para mais detalhes</div>


                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.row {
    .col-12 {
        .contactsUser {
            color: black;
            width: fit-content;
            padding: 5px  50px  5px  50px; 
            border-radius: 12px;
            float: left;
            border: 0px solid rgb(179, 179, 179);
        }
    }
}
    
</style>

<script setup>
import { ref } from "vue";
import svgIcons from '@resources/plugins/svg.js';

const RedSocial = ref(null);

const clickSocial = (btn) => {
    RedSocial.value = btn;
}


const listContact = [
    { title: 'WhatsApp', class: 'zap', icon: svgIcons.whatsapp },
    { title: 'Linkedin', class: 'linkedin', icon: svgIcons.linkedin },
    { title: 'Telegram', class: 'telegram', icon: svgIcons.telegram },
    { title: 'Facebook', class: 'facebook', icon: svgIcons.facebook },
]

const contatoUser = {
sendIcon: svgIcons.sendicon,
copyIcon: svgIcons.copyIcon,
}

function AbrirLink(link){
    const url = '';
    if(link === 'Linkedin') url = 'https://www.linkedin.com/in/marcellohenrique-pro/';
    else if(link === 'Facebook') url = 'https://www.facebook.com/marcelo.sousahenrique.92';
    else if(link === 'WhatsApp') url = 'https://wa.me/5594981319065';
    else if(link === 'Telegram') url = 'https://t.me/MarceloHenriquePro';
    window.open(url, '_blank');
}




function copiarTexto(conteudo) {
    var inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', conteudo);
    document.body.appendChild(inputTemporario);
    inputTemporario.select();

    document.execCommand('copy');
    document.body.removeChild(inputTemporario);

    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
    })

    Toast.fire({
    icon: 'success',
    title: 'Copiado com successo!'
    })
}
</script>