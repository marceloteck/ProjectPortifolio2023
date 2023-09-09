<template>
    <div class="container">
      <div class="row row-col-12 cardContent d-flex justify-content-center">
        <div class=" barraTitle"  v-if="topbarTitle">
          <h2>Projetos
            <span class="badge">
              <span class="tooltip">Todos</span>
              <i class="material-icons">forward</i>
            </span>
          </h2>
        </div>
  
        <div class="card" v-for="itens in 6" :key="itens">
          <img src="Assets/image/index/backgrounds/background_dark.avif" alt="">
          <div class="card_Tecnolog d-flex justify-content-end">
            <div class="svg" v-for="svg in emUso" :key="svg.title">
              <div v-html="svg.icon"></div>
            </div>
          </div>
          <div class="card__content">
            Titulo da postagem
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import svgIcons from '@resources/plugins/svgIndexCard.js';
const { topbarTitleCode } = defineProps(['topbarTitleCode']);

const topbarTitle = ref(true);

if (topbarTitleCode === "false") topbarTitle.value = false;


const emUso = [
{ title: 'vue.js', icon: svgIcons.vue_js },
];

const linguagens = [
  { title: 'php', icon: svgIcons.php },
  { title: 'html', icon: svgIcons.html5 },
  { title: 'css', icon: svgIcons.css3 },
  { title: 'laravel', icon: svgIcons.laravel },
  { title: 'vue.js', icon: svgIcons.vue_js },
  { title: 'Inertia.js', icon: svgIcons.inertia },
  { title: 'JavaScript', icon: svgIcons.js },
  { title: 'bootstrap', icon: svgIcons.bootstrap },
  { title: 'npm', icon: svgIcons.npm },
  { title: 'c#', icon: svgIcons.csharp },
  { title: 'git', icon: svgIcons.git },
  { title: 'github', icon: svgIcons.github },
];
</script>

<style lang="scss" scoped>
.cardContent {
  position: relative;
  width: 100%;

    .barraTitle {
        margin-bottom: 25px;
        padding: auto;
        position: relative;

        .badge {
            position: relative;
            float: right;
            font-size: 1rem;
            cursor: pointer;
            color: #333;
            transition: all 0.3s ease-in-out;

            .tooltip {
                position: absolute;
                top: 0;
                font-size: 14px;
                background: #ffffff;
                color: #ffffff;
                padding: 5px 8px;
                border-radius: 5px;
                box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                margin-left: -18px;
            }
            .tooltip::before {
                position: absolute;
                content: "";
                height: 8px;
                width: 8px;
                background: #ffffff;
                bottom: -3px;
                left: 50%;
                transform: translate(-50%) rotate(45deg);
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
        }
        .badge:hover {
            background: linear-gradient(320deg, #f89b29, #ff0f7b);
            color: #ffffff;

            .tooltip {
                top: -45px;
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }
            .tooltip, .tooltip::before{
                background-color: #d8d8d8;
                color: #333;
                border-color: #a5a5a5;
            }
        }
    }

    .card {
        position: relative;
        width: 25rem;
        height: 220px;
        background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        margin: 15px;

        svg {
            width: 48px;
            fill: #333;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }
        .card_Tecnolog {
            position: absolute;
            width: 100%;
            height: 20%;
            bottom: 10px;
            padding-right: 15px;
            box-sizing: border-box;
            opacity: 1;
            color: #fff;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

            svg {
                font-size: 0.3em;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            .svg:hover {
                color: #d8d8d8;
            }
        }
        .card__content {
            position: absolute;
            width: 100%;
            height: 25%;
            bottom: -70px;
            padding: 10px;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            font-family: 'Titillium Web', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
        }

    }
    .card:hover {
        transform: rotate(0deg) scale(1.1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        margin-top: 15px;

        .card_Tecnolog {
            opacity: 1;
            bottom: 69px;
        }
        .card__content {
            opacity: 1;
            bottom: 0px;
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
}
</style>