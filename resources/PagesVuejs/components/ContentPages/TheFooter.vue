<template>
<div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
    <div class="col imgLogo mb-3 ">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img :src="logo" class="logo" alt="Portifólio" />
      </a>
      <p class="">© {{ yearProject() }}</p>
    </div>

    <div class="col mb-3 "></div>

    <div class="col mb-3">
      <h5>Menu</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"  v-for="Menu in NavRouterLink" :key="Menu">
            <Link :href="Menu.route" class="nav-link p-0">{{ Menu.title }}</Link>
        </li>

      </ul>
    </div>

    <div class="col mb-3">
      <h5>Contato</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"  v-for="contact in contato" :key="contact">
            <Link :href="contact.contato" target="_blank" class="nav-link p-0">{{ contact.title }}</Link>
        </li>

      </ul>
    </div>

    <div class="col mb-3">
      <h5>Conhecimento</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2" v-for="frame in Framworks" :key="frame">
            <Link :href="frame.Link" class="nav-link p-0">{{ frame.title }}</Link>
        </li>
      </ul>
    </div>

    
  </footer>
</div>
</template>

<script setup>
import { ref } from 'vue';
import NavRouterLink from '@resources/plugins/NavRouterLink.js';

const logo = ref('/Assets/image/index/logo2_l.png');
const yearProject = () =>{
    const anoAtual = new Date().getFullYear();
    const anodoProjeto = '2023';
    if(anoAtual == anodoProjeto) return anodoProjeto; else
    if(anoAtual > anodoProjeto) return anodoProjeto + ' - ' + anoAtual;
}
const Framworks = [
    { title: 'Laravel', Link: '' },
    { title: 'vue.js', Link: '' },
    { title: 'Inertia.js', Link: '' },
    { title: 'Mysql', Link: '' },
    { title: 'PHP core', Link: '' },
]
const contato = [
    { title: 'whatsapp', contato: 'https://api.whatsapp.com/send/?phone=%2B5594981319065&text&type=phone_number&app_absent=0'},
    { title: 'Linkedin', contato: 'https://www.linkedin.com/in/marcellohenrique-pro/'},
    { title: 'Facebook', contato: 'https://www.facebook.com/marcelo.sousahenrique.92'},
    { title: 'GitHub', contato: 'https://github.com/marceloteck'},
]
</script>

<style lang="scss" scoped>
    $colorText: #fff;
    footer{
        color: $colorText;
        
        .col{
            position: relative;
            @media screen and (max-width: 768px) { text-align: center; }
        }

        a{ color: $colorText; }
        a:hover{ color: #fda543; }
        h5{
            color: #fda543;
            @media screen and (max-width: 768px) { text-align: center; }
        }
        .imgLogo {
            @media screen and (max-width: 768px) { 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
            .logo{
                width: 150px;
            }
        }
    }
</style>