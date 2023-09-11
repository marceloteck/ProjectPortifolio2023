<template>
    <div class="card" v-for="cardIntem in linguagens" :key="cardIntem[1]">
        <a class="card1" href="#">
            <span class="small"> <div v-html="cardIntem[1]"></div>  {{ cardIntem[0] }} </span>
            <div class="go-corner" href="#">
                <div class="go-arrow">
                    <i class="material-icons sizeText">call_received</i>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>
import svgIcons from '@resources/plugins/svg.js';

const linguagens = [
            ['php', svgIcons.php],
            ['html', svgIcons.html5],
            ['css', svgIcons.css3],
            ['laravel', svgIcons.laravel],
            ['vue.js', svgIcons.vue_js],
            ['Inertia.js', svgIcons.inertia],
            ['JavaScript', svgIcons.js],
            ['bootstrap', svgIcons.bootstrap],
            ['npm', svgIcons.npm],
            ['c#', svgIcons.csharp],
            ['git', svgIcons.git],
            ['github', svgIcons.github],
        ];
</script>

<style lang="scss" scoped>
.card {
    display: block;
    position: relative;
    width: 180px;
    height: 120px;
    background-color: #f2f8f9;
    border-radius: 4px;
    z-index: 0;
    overflow: hidden;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
  
    .small{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.8s ease;
        color: #666;
    }
    .small svg {
        width: 80%;
    }
    .go-corner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 32px;
        height: 32px;
        overflow: hidden;
        top: 0;
        right: 0;
        background-color: #00838d;
        border-radius: 0 4px 0 32px;
    }
    .go-arrow {
        margin-top: 0px;
        margin-right: -4px;
        color: white;
        font-family: courier, sans;
    }
    .go-arrow .sizeText{
        font-size: 0.8rem;
    }
    .card1{
        text-decoration: none;
    } 
}
.card:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
}

.card:hover:before {
    transform: scale(21);
}

.card:hover {
    .sizeText{
        rotate: -135deg;
        transition: all 0.3s ease-out;
    }
    span {
        transition: all 0.3s ease-out;
        color: rgba(255, 255, 255, 0.9);
    }
    h3 {
        transition: all 0.3s ease-out;
        color: #fff;
    }
}
</style>