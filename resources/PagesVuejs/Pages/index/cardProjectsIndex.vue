<template>
    <div class="container-xl">
        <div class="row cardContent">
            <div class="barraTitle" v-if="topbarTitle">
                <h2>
                    Projetos
                    <span class="badge">
                        <span class="tooltip">Todos</span>
                        <i class="material-icons">forward</i>
                    </span>
                </h2>
            </div>
            <div class="card" v-for="itens in cardProjects" :key="itens">
                <img :src="itens.urlImg" :alt="itens.title" />
                <div class="card_Tecnolog d-flex justify-content-end">
                    <div class="svg">
                        <div v-html="itens.icon"></div>
                    </div>
                </div>
                <div class="card__content">
                    <div class="title">{{ itens.title }}</div>
                    <a v-if="itens.url" :href="itens.url" target="_blank">
                        <div class="iconView">
                            <div v-html="internet"></div>
                        </div>
                    </a>
                    <a :href="itens.github" target="_blank">
                        <div class="iconGitHub">
                            <div v-html="svgIcons.github"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import svgIcons from "@resources/plugins/svgIndexCard.js";
const { topbarTitleCode } = defineProps(["topbarTitleCode"]);

const topbarTitle = ref(true);

if (topbarTitleCode === "false") topbarTitle.value = false;

const emUso = [
    {
        title: "vue.js",
        icon: svgIcons.vue_js,
    },
];

const linguagens = [
    { title: "php", icon: svgIcons.php },
    { title: "html", icon: svgIcons.html5 },
    { title: "css", icon: svgIcons.css3 },
    { title: "laravel", icon: svgIcons.laravel },
    { title: "vue.js", icon: svgIcons.vue_js },
    { title: "Inertia.js", icon: svgIcons.inertia },
    { title: "JavaScript", icon: svgIcons.js },
    { title: "bootstrap", icon: svgIcons.bootstrap },
    { title: "npm", icon: svgIcons.npm },
    { title: "c#", icon: svgIcons.csharp },
    { title: "git", icon: svgIcons.git },
    { title: "github", icon: svgIcons.github },
];

const cardProjects = [
    {
        title: "Meu Portifólio",
        icon: svgIcons.vue_js,
        urlImg: "/Assets/image/posts/img1-portifolio.png",
        github: "https://github.com/marceloteck/ProjectPortifolio2023",
        url: "https://marcelohenriquepro.dev.br",
    },
    {
        title: "Em construção - Envio de E-mails",
        icon: svgIcons.laravel,
        urlImg: "/Assets/image/posts/send-email-pro.png",
        github: "https://github.com/marceloteck/Send-Email-Laravel",
        //url: "https://info.marcelohenriquepro.dev.br/p/Send-Email-Laravel",
    },
    {
        title: "Assistente Virtual Jarvis",
        icon: svgIcons.csharp,
        urlImg: "/Assets/image/posts/Assistente-Jarvis.png",
        github: "https://github.com/marceloteck/Assistente-Virtual-Jarvis",
        url: "https://info.marcelohenriquepro.dev.br/p/Assistente-Virtual-Jarvis",
    },
];

const internet =
    '<svg width="1.9rem" height="1.9rem" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.2929 9.70708C20.5789 9.99307 21.009 10.0786 21.3827 9.92385C21.7564 9.76907 22 9.40443 22 8.99997V2.99997C22 2.44768 21.5523 1.99997 21 1.99997H15C14.5955 1.99997 14.2309 2.24361 14.0761 2.61729C13.9213 2.99096 14.0069 3.42108 14.2929 3.70708L16.2322 5.64641L9.58574 12.2929C9.19522 12.6834 9.19522 13.3166 9.58574 13.7071L10.2928 14.4142C10.6834 14.8048 11.3165 14.8048 11.7071 14.4142L18.3536 7.76774L20.2929 9.70708Z" fill="currentColor"/><path d="M4.5 8.00006C4.5 7.72392 4.72386 7.50006 5 7.50006H10.0625C10.6148 7.50006 11.0625 7.05234 11.0625 6.50006V5.50006C11.0625 4.94777 10.6148 4.50006 10.0625 4.50006H5C3.067 4.50006 1.5 6.06706 1.5 8.00006V19.0001C1.5 20.9331 3.067 22.5001 5 22.5001H16C17.933 22.5001 19.5 20.9331 19.5 19.0001V13.9376C19.5 13.3853 19.0523 12.9376 18.5 12.9376H17.5C16.9477 12.9376 16.5 13.3853 16.5 13.9376V19.0001C16.5 19.2762 16.2761 19.5001 16 19.5001H5C4.72386 19.5001 4.5 19.2762 4.5 19.0001V8.00006Z" fill="currentColor"/></svg>';
</script>

<style lang="scss" scoped>
.row {
    position: relative;
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.cardContent {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .barraTitle {
        margin-bottom: 25px;
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
            .tooltip,
            .tooltip::before {
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
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 15px;
        padding: 0;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

        @media screen and (max-width: 1320px) {
            width: 22rem;
            height: 218px;
        }
        @media screen and (max-width: 1170px) {
            width: 28rem;
            height: 230px;
        }
        @media screen and (max-width: 980px) {
            width: 25rem;
            height: 219px;
        }
        @media screen and (max-width: 890px) {
            width: 22rem;
            height: 219px;
        }
        @media screen and (max-width: 788px) {
            width: 18rem;
            height: 198px;
        }
        @media screen and (max-width: 660px) {
            width: 28rem;
            height: 230px;
        }

        img {
            width: 100%;
            height: 100%;
            position: relative;
        }

        svg {
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card_Tecnolog {
            position: absolute;
            right: 8px;
            bottom: 10px;
            border-radius: 50px;
            padding: 10px;
            box-sizing: border-box;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            background: linear-gradient(90deg, #c4853e 0%, #fb3640 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #dadada;

            svg {
                font-size: 0.3em;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            .svg:hover {
                color: #ffffff;
            }
        }
        .card__content {
            position: absolute;
            width: 100%;
            height: 50px;
            bottom: -68px;
            padding: 0px;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.5);
            opacity: 1;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            font-family: "Titillium Web", sans-serif;
            font-size: 1.2rem;
            font-weight: 600;

            .title {
                height: 50px;
                position: relative;
                float: left;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 8px;
                padding-right: 8px;
            }
            .iconView {
                position: relative;
                float: right;
                width: 50px;
                height: 50px;
                background: #e93e46;
                background: linear-gradient(45deg, #926839 0%, #e93e46 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                cursor: pointer;
                transition: all 0.5s ease-in-out;
            }
            .iconGitHub {
                position: relative;
                float: right;
                width: 50px;
                height: 50px;
                background: #e93e46;
                background: linear-gradient(45deg, #926839 0%, #e93e46 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                cursor: pointer;
                transition: all 0.5s ease-in-out;
            }
            .iconGitHub:hover,
            .iconView:hover {
                background: linear-gradient(95deg, #855f35 0%, #d43940 100%);
            }
        }
    }
    .card:hover {
        transform: rotate(0deg) scale(1.1);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        margin-top: 15px;

        .card_Tecnolog {
            opacity: 1;
            bottom: 69px;
            color: #ffffff;
        }
        .card__content {
            opacity: 1;
            bottom: 0px;
            background-color: rgba(255, 255, 255, 0.9);
        }
    }
}
</style>
