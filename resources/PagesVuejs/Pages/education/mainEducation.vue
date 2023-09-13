<template>
<div class="container-fluid">
  <LayoutTopPages>
      <particlesCircles />
      <template #titlePage>
          Formação e Cursos
      </template>
  </LayoutTopPages>
  <div class="container-xl">
    <div class="row projetctEducations">
    <div class="col-12 col-lg-7">
      <div class="accordion" id="accordionEducation">
        <div class="accordion-item" v-for="IsItem in educations" :key="IsItem.item">
          <h2 class="accordion-header" :id="IsItem.item">
            <button @click="BtnItemClick(IsItem.item)" class="accordion-btn" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + IsItem.item"
                :aria-expanded="(IsItem.item === 'item1') ? true : false"
                :aria-controls="'collapse' + IsItem.item">
              <div class="icon" v-html="svg.circleOk"></div> {{ IsItem.title }}
              <div :class="['moreicon', {'showMore': IsItem.item === selectBtnItem }]">
                <div class="iconSvg" v-html="svg.ExpandMore"></div>
              </div>
            </button>
          </h2>
          <div :id="'collapse' + IsItem.item"
            :class="(IsItem.item === 'item1') ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'"
            :aria-labelledby="IsItem.item" data-bs-parent="#accordionEducation">
            <div class="accordion-body">
              <div class="imgBody" :style="IsItem.size"> <img :src="IsItem.img" :alt="IsItem.title" /> </div>
              <div class="TextBody">
                <span class="title" v-if="IsItem.formation !== 'none'">{{ IsItem.formation }} </span> <br>
                <span class="periodo" v-if="IsItem.date !== 'none'">{{ IsItem.date }}</span> <br>
                <span class="link" 
                v-if="IsItem.link !== 'none' && (IsItem.WebLocal !== 'youtube' && IsItem.WebLocal !== 'link')">
                  <a target="_blank" :href="IsItem.link">Ver certificado</a> {{ IsItem.WebLocal }}
                </span>
                <span class="link" 
                v-if="IsItem.link !== 'none' && (IsItem.WebLocal === 'youtube' || IsItem.WebLocal === 'link')">
                  <a target="_blank" :href="IsItem.link">Acessar Link</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-5">
      <imagensWeb ImgSrc="Assets/image/index/imgEducations.png" style="width: 100%;" />
    </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";

const selectBtnItem = ref('item1');

const BtnItemClick = (btnItem) => {
  if(selectBtnItem.value === btnItem) selectBtnItem.value = ''; 
  else selectBtnItem.value = btnItem; 
};

const educations = [
  {
    item: 'item1', 
    title: 'Graduado em Análise e Desenvolvimento de Sistemas', 
    img: 'Assets/image/index/icons/logo-unopar.png', 
    formation: 'Curso Superior de Tecnologia (CST), Análise de Sistemas de Computação',
    date: 'mar de 2014 - dez de 2016', 
    link: 'https://drive.google.com/file/d/1gP1i4ErSR6RwUQ9I3X0wCZ5a3ZIe2Zar/view?usp=sharing', 
    size: 'width:85px; height:70px;',
  },
  {
    item: 'item2',
    title: 'Fundação Bradesco - HTML básico',
    img: 'Assets/image/index/icons/fundacaoBradesco.png',
    formation: 'Curso de HTML Básico',
    date: 'Jun de 2016',
    link: 'https://drive.google.com/file/d/1e2RG12d32ldoguPGluB5D0Hac8OoF9wU/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item2_1',
    title: 'Fundação Bradesco - HTML Avançado',
    img: 'Assets/image/index/icons/fundacaoBradesco.png',
    formation: 'Curso de HTML Avançado',
    date: 'Jun de 2016',
    link: 'https://drive.google.com/file/d/1zuOnSQpDlARIHA8OhH4sDTN3-JnVrVOM/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item3',
    title: 'Fundação Bradesco - Ilustração & Design Gráfico para Web',
    img: 'Assets/image/index/icons/fundacaoBradesco.png',
    formation: 'Curso de Ilustração e Design Gráfico para Web',
    date: 'Nov de 2016',
    link: 'https://drive.google.com/file/d/1_vf87q_RN24qxivgZMaCAIsdCmO2v8XX/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item4',
    title: 'Fundação Bradesco - Inovando com CSS',
    img: 'Assets/image/index/icons/fundacaoBradesco.png',
    formation: 'Curso Inovando com CSS',
    date: 'Jul de 2016',
    link: 'https://drive.google.com/file/d/1c8xWKstJ7dRCvOquXykhqOnRSTZknwvs/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item5',
    title: 'Fundação Bradesco - Introdução ao JavaScript',
    img: 'Assets/image/index/icons/fundacaoBradesco.png',
    formation: 'Curso de Introdução ao JavaScript',
    date: 'Jul de 2016',
    link: 'https://drive.google.com/file/d/15t7cgX0Kxr_FasKygSC8kEgF-lbKIHWZ/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item6',
    title: 'LinkedIn Learning - Como Desenvolver sua Inteligência Emocional',
    img: 'Assets/image/index/icons/linkedin.png',
    formation: 'Como Desenvolver sua Inteligência Emocional',
    date: 'Nov de 2022',
    link: 'https://www.linkedin.com/learning/certificates/4b1db386727b528f575f9043287517a904f1073d36645bc7871153b6863c454d',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item7',
    title: 'Certificado MELVER de - Gestão do tempo e Organização',
    img: 'Assets/image/index/icons/melver.png',
    formation: 'Curso Gestão do tempo e Organização',
    date: 'Nov de 2022',
    link: 'https://drive.google.com/file/d/1QDLrFmi-CKi3p8Hn2pm3BjOupRaxjAWP/view?usp=sharing',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item8',
    title: 'Certificado MELVER de - Dominando o LinkedIn',
    img: 'Assets/image/index/icons/melver.png',
    formation: 'Curso Dominando o LinkedIn',
    date: 'Nov de 2022',
    link: 'https://drive.google.com/file/d/1CuOA7F3Mad25H0ofQy5VhlbEAxkk2xMF/view?usp=drive_link',
    size: 'width:85px; height:90px;',
  },
  {
    item: 'item9',
    title: 'Auto Didata - Curso de Laravel',
    img: 'Assets/image/index/icons/youtube.png',
    formation: 'Curso de Laravel no canal do Youtube: Node Studio Treinamentos',
    date: 'Em Andamento',
    link: 'https://www.youtube.com/playlist?list=PLwXQLZ3FdTVH5Tb57_-ll_r0VhNz9RrXb',
    size: 'width:106px; height:90px;',
    WebLocal: 'youtube',
  },
  {
    item: 'item10',
    title: 'Auto Didata - Curso de Vue.js 3',
    img: 'Assets/image/index/icons/youtube.png',
    formation: 'Curso de Vue.js 3 no canal do Youtube: Tiago Matos',
    date: 'Jun 2023',
    link: 'https://www.youtube.com/playlist?list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w',
    size: 'width:106px; height:90px;',
    WebLocal: 'youtube',
  },
  {
    item: 'item11',
    title: 'Auto Didata - Curso de Inertia.js',
    img: 'Assets/image/index/icons/youtube.png',
    formation: 'Curso de Inertia.js estudos em varios videos',
    date: 'Em andamento',
    link: 'none',
    size: 'width:106px; height:90px;',
    WebLocal: 'youtube',
  },
  {
    item: 'item12',
    title: 'Auto Didata - Curso de C#',
    img: 'Assets/image/index/icons/w3schools.png',
    formation: 'Curso de C# pela w3schools',
    date: 'Mar 2023',
    link: 'https://drive.google.com/file/d/1DBHyg11kITH6hlXCCc4zVHXDTWoCG0_z/view?usp=sharing',
    size: 'width:85px; height:90px;',
    WebLocal: 'link',
  },
];

const svg = {
  'circleOk': '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',
  'ExpandMore': '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-358.463 253.847-584.615 296-626.768l184 184 184-184 42.153 42.153L480-358.463Z"/></svg>',
}

</script>


<style lang="scss" scoped>
.projetctEducations {
  margin-top: 25px;
  margin-bottom: 25px;

  .col-lg-5 {
    @media screen and (max-width: 991px) { display: none;}
  }

  .accordion-btn {
    outline: none !important;
    border: none !important;
    background-color: rgb(255, 255, 255);
    width: 100%;
    padding: 15px;
    text-align: left;
    font-size: 1.4rem;
    color: black;
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;

    @media screen and (max-width: 576px) { font-size: 1.2rem; }
  }
  .icon{
    float: left;
    margin-right: 10px;
  }
  .moreicon{
    position: relative;
    float: right;
    transform: rotate(90deg);
    transition: all 0.2s ease-in-out;

    .iconSvg{
        color: #979494;
    }
  }
  .showMore{
    transform: rotate(0deg) !important;
  }
  .accordion-body{
    position: relative;
    display: flex;
    flex-direction:row;
    
    .imgBody{
      border:solid 1px #ccc;
      border-radius:4px;
      background: #f1f1f1;
      transition: all .2s ease-in-out;

      img{
        width: 100%;
        min-width: 85px;
        height: 100%;
        min-height: 70px;
        position: relative;
      }
    }
    .imgBody:hover{
      border:solid 1px rgb(243, 243, 243);
      background: rgb(243, 243, 243);
    }
    .TextBody{
      position: relative;
      padding-left: 15px;
      font-family: 'Titillium Web', sans-serif;

      span.title{
        font-weight: bold;
      }
      span.periodo{
        font-weight: 500;
        color: #424242;
      }
      span.link a{
        font-weight: 600;
        color: #1a46a5;
        text-decoration: none;
        cursor: pointer;
      }
      span.link a:hover{
        color: #37528b;
      }
    }
  }
}
</style>