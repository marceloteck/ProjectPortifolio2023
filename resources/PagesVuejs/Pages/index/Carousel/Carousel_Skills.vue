<template>
    <div class="container-fluid">
        <Carousel v-bind="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in linguagens" :key="slide">
                <div class="card">
                    <div class="icon">
                        <div v-html="slide.icon"></div>
                    </div>
                    <p class="title">{{ slide.title }}</p>
                    <p class="text">Clique para mais detalhes.</p>
                </div>
            </Slide>
        </Carousel>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    background-color: rgb(224, 224, 224);
    padding: 30px;
    position: relative;

    .card {
        width: 100%;
        max-width: 300px;
        height: 220px;
        min-height: 200px;
        background-color: #ffffff;
        margin: 5px;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
        border: 2px solid rgba(7, 7, 7, 0.12);
        font-size: 16px;
        transition: all 0.3s ease;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        font-family: "Titillium Web", sans-serif;

        .icon {
            margin: 0 auto;
            width: 100%;
            height: 80px;
            max-width: 80px;
            background: linear-gradient(
                90deg,
                #c4853e 0%,
                #fb3640 40%,
                rgba(0, 0, 0, 0.28) 60%
            );
            color: #ffffff;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.8s ease;
            background-position: 0px;
            background-size: 200px;
        }
        .title {
            width: 100%;
            margin: 0;
            text-align: center;
            margin-top: 30px;
            color: rgb(0, 0, 0);
            font-weight: 600;
            text-transform: capitalize;
            letter-spacing: 4px;
        }
        .text {
            width: 80%;
            margin: 0 auto;
            font-size: 13px;
            text-align: center;
            margin-top: 20px;
            color: rgb(0, 0, 0);
            font-weight: 200;
            letter-spacing: 2px;
            opacity: 0;
            max-height: 0;
            transition: all 0.3s ease;
        }
    }
    .card:hover {
        height: 220px;

        .text {
            transition: all 0.3s ease;
            opacity: 1;
            max-height: 40px;
        }
        .icon {
            background-position: -120px;
            transition: all 0.3s ease;
            color: #ffffff;
        }
        .icon i {
            transition: all 0.3s ease;
        }
    }
}
</style>

<script setup>
import svgIcons from "@resources/plugins/svg.js";

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
</script>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Breakpoints",
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
            wrapAround: true,
            pauseAutoplayOnHover: true,
            autoplay: 3000,
            modelValue: 0,
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 300px and up
            300: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            // 425px and up
            425: {
                itemsToShow: 3,
                snapAlign: "center",
            },
            // 700px and up
            700: {
                itemsToShow: 5,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 7,
                snapAlign: "end",
            },
        },
    }),
});
</script>
