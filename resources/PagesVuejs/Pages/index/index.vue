<template>
    <article>
        <AppHead title="inicio" />
        <header>
            <NavBar />
        </header>

        <section class="section01">
            <particles />
            <mainIndex />
        </section>

        <section class="section02">
            <Carousel_Skills />
            <curriculoEmail />
        </section>

        <section class="section03">
            <cardProjectsIndex />
        </section>

        <section class="footerComponents">
            <TheFooter />
        </section>
    </article>
</template>

<style lang="scss">
    .section01{
        background: rgb(24, 26, 55);
        background: linear-gradient(36deg, rgba(24, 26, 55, 1) 0%, rgba(2, 15, 38, 1) 100%);
        background-image: url('Assets/image/index/backgrounds/background_dark.avif');
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: multiply;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .section02 {
        background: rgb(24, 26, 55);
        background: linear-gradient(36deg, rgb(34, 35, 43) 0%, rgb(19, 20, 26) 100%);
        background-image: url('Assets/image/index/backgrounds/emailCurriculoBackground.avif');
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: multiply;
    }
    .section01::before, .section02::before {
        content: "";
        position: absolute;
        background-color: rgba(29, 29, 29, 0.6);
        background-blend-mode: multiply;
        background-size: cover;
        background-attachment: fixed;
    }
    .section02, .section02::before{
        width: 100%;
        min-height: 93vh;
    }
    .section01, .section01::before{
        width: 100%;
        height: 100vh;
        min-height: 490px;
    }
    .section03{
        background: rgb(221, 221, 221);
        width: 100%;
        min-height: 100vh;
        padding-top: 20px;

    }
    
 
</style>