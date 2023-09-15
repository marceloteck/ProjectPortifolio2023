<template>
    <div class="container-fluid">
        <LayoutTopPages>
            <particlesCircles />
            <template #titlePage>
                Contatos
            </template>
        </LayoutTopPages>

        <div class="row desktop">
            <div class="col-12">
                <div class="contactsUser">
                    <div v-for="list in listContact" :key="list"
                    @click="clickSocial(list.class)" :class="['IconsContacts', list.class]">
                        <span class="tooltip">{{ list.title }}</span>
                        <div v-html="list.icon"></div>
                    </div>
                    <div class="description" v-if="RedSocial === null">Clique para mais detalhes
                    <br> 
                    <strong>
                        <span @click="copiarTexto('marcellosh.12@gmail.com')" class="LinkEmail">marcellosh.12@gmail.com</span>
                    </strong>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="detailsContacts">
                    <div v-for="number in listNumber" :key="number"
                    :class="['CardAppContacts', {'AppTopVisible': RedSocialOK(number.TypeSocial)}]">
                        <span :class="['number', number.TypeSocial + 'Bg']">{{ number.number }}</span>
                        <span :class="['copy', number.TypeSocial + 'Bg']" @click="copiarTexto(number.number)"><i v-html="icons.copyIcon"></i></span>
                        <span :class="['Enviar', number.TypeSocial + 'Bg']" @click="AbrirLink(number.TypeSocial)">
                            <span class="iconSend"><i v-html="icons.sendIcon"></i></span>
                        </span>
                        <br> <div class="textInfo">{{ number.msg }}</div>
                    </div>
                    <div v-for="social in ListRedsocial" :key="social"
                    :class="['CardAppContacts', {'AppTopVisible': RedSocialOK(social.TypeSocial)}]" 
                    @click="AbrirLink(social.TypeSocial)" >
                        <span :class="['number', social.TypeSocial + 'Bg']">
                            Abrir {{ social.titleRede}}: <u>{{ social.NameRede }}</u> 
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mobile">





            <div class="accordion" id="accordioncontacts">

                <div class="accordion-item" v-for="list in listContact" :key="list">
                    <h2 class="accordion-header" :id="list.class + 'id'">
                    <button 
                    :class="['accordion-btn', list.class + 'Bg']" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + list.class + 'Contact'" aria-expanded="false" :aria-controls="list.class + 'Contact'">
                        <div v-html="list.icon"></div> <div class="textContact">{{ list.title }}</div> 
                    </button>
                    </h2>
                    <div :id="list.class + 'Contact'" class="accordion-collapse collapse" :aria-labelledby="list.class + 'id'" data-bs-parent="#accordioncontacts">
                    <div class="accordion-body">
                        <strong>contato pelo whatsapp</strong> 
                    </div>
                    </div>
                </div>


            </div>



        </div>

    </div>
</template>
<style lang="scss" scoped>
.desktop {
    @media screen and (max-width: 400px) { display: none; }
    .col-12 {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .contactsUser {
            color: black;
            width: fit-content;
            padding: 5px  50px  5px  50px; 
            border-radius: 12px;
            float: left;
            border: 0px solid rgb(179, 179, 179);

            @media screen and (max-width: 396px) {
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            .LinkEmail{
                cursor: pointer;
                text-decoration: none;
                color:#000000;
            }
            .IconsContacts {
                position: relative;
                float: left;
                padding: 10px;
                color: rgb(12, 18, 26);
                font-size: 3rem;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                

                .tooltip {
                    position: absolute;
                    top: 0;
                    font-size: 14px;
                    background: #000000;
                    color: #ffffff;
                    padding: 5px 8px;
                    border-radius: 5px;
                    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    right: -3px;
                }
                .tooltip::before {
                    position: absolute;
                    content: "";
                    height: 8px;
                    width: 8px;
                    background: #000000;
                    bottom: -3px;
                    left: 50%;
                    transform: translate(-50%) rotate(45deg);
                    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
            }
            .whatsapp { color: #00860d; }
            .whatsapp:hover { color: #062c09; }
            .telegram { color: #2294cf; }
            .telegram:hover { color: #185e81; }
            .linkedin { color: #126bc4; }
            .linkedin:hover { color: #0e4781; }
            .facebook { color: #415e9a; }
            .facebook:hover { color: #253453; }

            .description{
                width: 100%;
                text-align: center;
                font-weight: 400;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

                @media screen and (max-width: 396px) {float: left;}
            }
        }
        .detailsContacts {
            display: flex;
            justify-content: center;
            align-items: center;

            .CardAppContacts{
                margin-top: 450px;
                padding: 10px;
                color: aliceblue;
                font-family: 'Titillium Web', sans-serif;
                pointer-events: none;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                opacity: 0;
                position: absolute;

                .copy{ height: 100%; }
                .number, .Enviar, .copy {
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(17, 17, 17, 0.5);
                    margin-right: 2px;
                    padding: 13px;
                    cursor: pointer;

                    .iconSend{
                        transform: rotate(-30deg);
                        transition: all .2s ease-in-out;
                    }
                }
                .Enviar:hover{
                    .iconSend{
                        transform: rotate(0deg);
                    }
                }
                .textInfo{
                    position: absolute;
                    margin-top: 20px;
                    color: #3f3f3f;
                    text-align: center;
                    width: 93%;
                    font-weight: 400;
                    
                }
            }
            .AppTopVisible{
                margin-top: 150px !important;
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }
        }
    }
}
.mobile {
    display: none;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 400px) { display: block; }

    .accordion-item {
        border: 0px;
        .accordion-header {
            text-align: center;
            justify-content: center;
            display: flex;
            align-items: center;

            
            .accordion-btn {
                outline: none !important;
                border: none !important;
                background-color: rgb(255, 255, 255);
                width: 100%;
                padding: 15px;
                text-align: left;
                font-size: 1.4rem;
                color: rgb(255, 255, 255);
                font-family: 'Titillium Web', sans-serif;
                font-weight: 600;
                box-shadow: none;
                display: flex;
                justify-content: start;
                flex-direction: row;
                flex-wrap: wrap;
                align-content:end;
                align-items: center;
            }
            .textContact {
                margin-left: 15px;
                font-size: 1.1rem;
            }
        }
        .accordion-btn::after, .accordion-btn::before {
            box-sizing: border-box;
        }
    }

}
.whatsappBg{ 
    background-color: rgb(0, 134, 13) !important; 
    @media screen and (max-width: 400px) { border-radius: 10px 10px 0px 0px; }
}
.whatsappBg:hover{ background-color: rgb(3, 109, 13) !important; }
.linkedinBg{ background-color: rgb(19, 80, 141) !important; }
.linkedinBg:hover{ background-color: rgb(13, 47, 82) !important; }
.telegramBg{ background-color: rgb(27, 99, 136) !important; }
.telegramBg:hover{ background-color: rgb(17, 60, 82) !important; }
.facebookBg{ 
    background-color: rgb(45, 64, 102) !important; 
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 400px) { border-radius: 0px 0px 10px 10px; } 
}
.facebookBg:focus{
    @media screen and (max-width: 400px) { border-radius: 0px 0px 0px 0px; }
}
.facebookBg:hover{ background-color: rgb(29, 41, 65) !important; }
</style>

<script setup>
import { ref } from "vue";
import svgIcons from '@resources/plugins/svg.js';

const RedSocial = ref(null);

const clickSocial = (btn) => { 
    if(RedSocial.value === null) RedSocial.value = btn; else
    if(RedSocial.value === null || RedSocial.value === btn) RedSocial.value = null;
    else RedSocial.value = btn;
}
const RedSocialOK = (ok) => { 
    if(RedSocial.value === ok) return true;
 }
const listContact = [
    { title: 'WhatsApp', class: 'whatsapp', icon: svgIcons.whatsapp },
    { title: 'Telegram', class: 'telegram', icon: svgIcons.telegram },
    { title: 'Linkedin', class: 'linkedin', icon: svgIcons.linkedin },
    { title: 'Facebook', class: 'facebook', icon: svgIcons.facebook },
]
const listNumber = [
    { number: '+55 (94) 9 98131-6065', TypeSocial: 'whatsapp', msg: 'Contato pelo Whatsapp'},
    { number: '+55 (94) 9 98131-6065', TypeSocial: 'telegram', msg: 'Contato pelo Telegram'}
]
const ListRedsocial = [
    { titleRede: 'Linkedin', TypeSocial: 'linkedin', NameRede: 'marcellohenrique-pro'},
    { titleRede: 'Facebook', TypeSocial: 'facebook', NameRede: 'marcelo.sousahenrique.92'},
]

const icons = {
    sendIcon: svgIcons.sendicon,
    copyIcon: svgIcons.copyIcon,
}

function AbrirLink(link){
    let url = '';
    if(link === 'linkedin') url = 'https://www.linkedin.com/in/marcellohenrique-pro/';
    else if(link === 'facebook') url = 'https://www.facebook.com/marcelo.sousahenrique.92';
    else if(link === 'whatsapp') url = 'https://wa.me/5594981319065';
    else if(link === 'telegram') url = 'https://t.me/MarceloHenriquePro';
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