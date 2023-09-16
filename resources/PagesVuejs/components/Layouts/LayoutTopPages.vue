<template>
    <div class="row topUser">
        <div class="col-12">
            <slot />
            <h2><slot name="titlePage"></slot></h2> 
        </div>
    </div>
</template>

<style lang="scss" scoped>
.topUser {
    .col-12 {
        width: 100%;
        height: 45vh;
        min-height: 250px;
        background: rgb(24, 26, 55);
        background: linear-gradient(36deg, rgba(24, 26, 55, 1) 0%, rgba(2, 15, 38, 1) 100%);
        background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/3580723-abstrato-preto-metalico-poligono-laranja-luz-futurista-tecnologia-design-fundo-vetor.jpg');
        // background-image: url('Assets/image/index/backgrounds/pagesBackground.avif');
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        float: left;

        h2{
            color: #fff;
            margin-top: 10vh;
            font-size: 3rem;
            font-family:  'Titillium Web', sans-serif;
            font-weight: 800;

            @media screen and (max-width: 380px) { text-align: center;}
        }
    }
}
</style>